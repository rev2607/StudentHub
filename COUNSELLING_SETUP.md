# Counselling Requests Setup Guide

This guide will help you set up the counselling requests functionality with Supabase.

## 🗄️ Database Setup

### Step 1: Run the Migration

Execute the SQL migration file in your Supabase SQL editor:

```bash
# Navigate to your Supabase dashboard
# Go to SQL Editor
# Copy and paste the contents of: db/migrations/2025-01-create-counselling-requests.sql
# Execute the SQL
```

### Step 2: Verify Table Creation

After running the migration, you should see a new table called `counselling_requests` with the following structure:

- `id` (UUID, Primary Key)
- `email` (VARCHAR)
- `parent_name` (VARCHAR)
- `student_name` (VARCHAR)
- `phone_number` (VARCHAR)
- `exam_target` (VARCHAR)
- `location` (VARCHAR)
- `status` (VARCHAR, default: 'pending')
- `notes` (TEXT, optional)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## 🔐 Security Configuration

The migration includes Row Level Security (RLS) policies:

- **Insert Policy**: Anyone can submit counselling requests
- **Select Policy**: Users can view their own requests
- **Admin Policy**: Admin users (admin@studenthub.in, info@studenthub.in) can view all requests

### To modify admin access:

1. Go to Supabase Dashboard → Authentication → Policies
2. Find the `counselling_requests` table policies
3. Update the admin email list in the policy

## 🚀 How It Works

### 1. User Submits Form
- User clicks "Start Now" in the counselling section
- Modal form appears with required fields
- User fills out: Email, Parent Name, Student Name, Phone, Exam Target, Location
- Form validates all fields before submission

### 2. Data Saved to Supabase
- Form data is sent to `counselling_requests` table
- Status is automatically set to "pending"
- Timestamps are automatically generated
- User receives confirmation message

### 3. Admin Management
- Use the `CounsellingRequestsView` component to view all requests
- Requests are displayed in a table format
- Status can be updated (pending, contacted, scheduled, completed, cancelled)
- Color-coded status indicators

## 📊 Status Types

- **pending** (Yellow) - New request, awaiting contact
- **contacted** (Blue) - Initial contact made
- **scheduled** (Purple) - Counselling session scheduled
- **completed** (Green) - Counselling completed
- **cancelled** (Red) - Request cancelled

## 🛠️ Integration Points

### Frontend Components:
- `CounsellingSignupForm.tsx` - The modal form
- `CounsellingRequestsView.tsx` - Admin view for requests
- `counsellingService.ts` - API service layer

### Backend Integration:
- All data operations go through Supabase
- No additional backend API needed
- Real-time updates possible with Supabase subscriptions

## 🔍 Testing

### Test Form Submission:
1. Go to home page
2. Scroll to counselling section
3. Click "Start Now"
4. Fill out the form
5. Submit and verify success message

### Test Admin View:
1. Import `CounsellingRequestsView` component
2. Add to admin panel or test page
3. Verify requests appear in table
4. Check status colors and formatting

## 📝 Notes

- Form includes comprehensive validation
- Phone numbers must be 10 digits
- Email format validation included
- All fields are required
- Data is stored securely in Supabase
- RLS policies ensure data privacy
- Automatic timestamps for tracking

## 🚨 Troubleshooting

### Common Issues:

1. **Form not submitting**: Check Supabase connection and table permissions
2. **Data not appearing**: Verify RLS policies allow your user access
3. **Validation errors**: Check form field requirements and formats
4. **Network errors**: Verify Supabase URL and API keys

### Debug Steps:
1. Check browser console for errors
2. Verify Supabase table exists and has correct structure
3. Test RLS policies with different user roles
4. Confirm form validation logic
