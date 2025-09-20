# Supabase Database Setup

## Database Schema

You need to create the following table in your Supabase database:

### Table: `user_profiles`

```sql
-- Create the user_profiles table
CREATE TABLE user_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  target_exam TEXT NOT NULL,
  pincode TEXT NOT NULL,
  city_area TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on user_id for faster lookups
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);

-- Create a unique index on user_id to ensure one profile per user
CREATE UNIQUE INDEX idx_user_profiles_unique_user_id ON user_profiles(user_id);

-- Create a unique index on email to ensure unique emails
CREATE UNIQUE INDEX idx_user_profiles_unique_email ON user_profiles(email);

-- Create a unique index on phone_number to ensure unique phone numbers
CREATE UNIQUE INDEX idx_user_profiles_unique_phone ON user_profiles(phone_number);
```

### Row Level Security (RLS)

Enable RLS and create policies:

```sql
-- Enable RLS on the table
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own profile
CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can only insert their own profile
CREATE POLICY "Users can insert own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can only update their own profile
CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Policy: Users can only delete their own profile
CREATE POLICY "Users can delete own profile" ON user_profiles
  FOR DELETE USING (auth.uid() = user_id);
```

### Trigger for updated_at

Create a trigger to automatically update the `updated_at` timestamp:

```sql
-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger on the user_profiles table
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Supabase Configuration

Your Supabase configuration is already set up in the code with:

- **Project URL**: `https://bdhqbjrjazdfkoulwduo.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkaHFianJqYXpkZmtvdWx3ZHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDgzODgsImV4cCI6MjA3MzkyNDM4OH0.yCm-nqKFNR1n8H0tC6T3rPb1K3d-cR8CA4oZ9nL_KSQ`

## Features Implemented

✅ **User Registration**: Complete signup form with all mandatory fields
✅ **User Authentication**: Email/password signin
✅ **Profile Management**: Edit profile functionality
✅ **Header Integration**: Auth state in navigation
✅ **Mobile Responsive**: Works on all device sizes
✅ **Form Validation**: Client-side validation for all fields
✅ **Error Handling**: Proper error messages and loading states
✅ **Security**: Row Level Security (RLS) policies

## Mandatory Fields

The signup form includes all required fields:
- ✅ Name
- ✅ Phone Number  
- ✅ Email
- ✅ Target Exam (dropdown with popular exams)
- ✅ Pincode
- ✅ City/Area

## Target Exams Available

- JEE Main
- JEE Advanced
- NEET
- GATE
- CAT
- UPSC
- SSC
- CLAT
- AIIMS
- Other

## How to Set Up

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands above in order
4. The authentication system will be ready to use!

## Testing

After setting up the database schema, you can:
1. Create a new account using the Sign Up button
2. Sign in with your credentials
3. Edit your profile information
4. Sign out and sign back in
