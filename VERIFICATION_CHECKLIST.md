# Email+Password Signup Flow - Verification Checklist

## Prerequisites
- Supabase project with auth enabled
- Frontend development server running on `http://localhost:5173`
- `.env` file configured with Supabase credentials

## Step 1: Database Migration
1. **Run the SQL migration:**
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Copy and paste the contents of `db/migrations/2025-09-create-profiles.sql`
   - Click "Run" to execute the migration
   - Verify the `profiles` table is created with proper RLS policies

## Step 2: Frontend Development Server
1. **Start the development server:**
   ```bash
   cd StudentHub_Frontend
   npm run dev
   ```
2. **Verify server is running:** Navigate to `http://localhost:5173`

## Step 3: Test Signup Flow
1. **Navigate to signup page:**
   - Go to `http://localhost:5173/signup`
   - Verify the combined signup + profile form is displayed

2. **Test form validation:**
   - Try submitting with empty fields → should show validation errors
   - Enter invalid phone (e.g., "123") → should show "Phone must be 10 digits"
   - Enter invalid email → should show email validation error
   - Enter password < 6 chars → should show password length error
   - Enter mismatched passwords → should show "Passwords do not match"
   - Leave target exam unselected → should show "Please select a target exam"

3. **Test successful signup:**
   - Fill in all required fields with valid data:
     - Full Name: "John Doe"
     - Phone: "9876543210"
     - Email: "john.doe@example.com"
     - Password: "password123"
     - Confirm Password: "password123"
     - City: "Mumbai"
     - Target Exam: "JEE Mains"
   - Click "Create Account"
   - Should redirect to home page (`/`)

4. **Verify in Supabase:**
   - Check `auth.users` table → should see new user record
   - Check `profiles` table → should see profile record with user_id linking to auth.users

## Step 4: Test Login Flow
1. **Navigate to login page:**
   - Go to `http://localhost:5173/login`
   - Or click "Sign in" from signup page

2. **Test login:**
   - Enter the email and password from step 3
   - Click "Sign in"
   - Should redirect to home page (`/`)

3. **Test invalid login:**
   - Try wrong password → should show "Invalid email or password"
   - Try non-existent email → should show "Invalid email or password"

## Step 5: Test Auth Guarding
1. **Test protected routes while logged out:**
   - Sign out (if logged in)
   - Navigate to `http://localhost:5173/mock-tests`
   - Should redirect to `/signup?next=%2Fmock-tests`
   - After successful login, should redirect back to `/mock-tests`

2. **Test protected routes while logged in:**
   - Login with valid credentials
   - Navigate to `http://localhost:5173/mock-tests`
   - Should show the mock tests page (not redirect)

## Step 6: Test Profile Editing
1. **Navigate to profile edit:**
   - While logged in, go to `http://localhost:5173/profile/edit`
   - Should show form pre-filled with current profile data

2. **Test profile update:**
   - Modify some fields (e.g., change city to "Delhi")
   - Click "Update Profile"
   - Should redirect to home page
   - Verify changes in Supabase `profiles` table

3. **Test phone uniqueness:**
   - Try updating phone to a number already in use by another user
   - Should show "Phone already in use. Please use a different number."

## Step 7: Test Error Handling
1. **Test duplicate email signup:**
   - Try to signup with the same email from step 3
   - Should show "Email already registered. Please login instead."

2. **Test duplicate phone signup:**
   - Try to signup with the same phone from step 3
   - Should show "Phone already in use. Use a different number or login."

## Step 8: Test Navigation
1. **Test signup/login navigation:**
   - From signup page, click "Sign in" → should go to login page
   - From login page, click "Create account" → should go to signup page

2. **Test profile navigation:**
   - From profile edit, click "Sign Out" → should logout and redirect to home
   - From profile edit, click "Back to Home" → should go to home page

## Expected Results Summary
- ✅ Combined signup + profile form works with validation
- ✅ Successful signup creates both auth user and profile record
- ✅ Login works and redirects properly
- ✅ Protected routes redirect unauthenticated users to signup
- ✅ Profile editing works with pre-filled data
- ✅ Phone uniqueness is enforced
- ✅ Email uniqueness is enforced
- ✅ All validation errors show appropriate messages
- ✅ Navigation between auth pages works correctly

## Troubleshooting
- If Supabase connection fails: Check `.env` file has correct `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- If migration fails: Check SQL syntax and ensure you have proper permissions in Supabase
- If auth doesn't work: Verify Supabase Auth is enabled in your project settings
- If RLS errors occur: Ensure the profiles table has proper RLS policies enabled
