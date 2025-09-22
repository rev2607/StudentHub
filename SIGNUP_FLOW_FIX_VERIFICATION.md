# Signup Flow Fix - Verification Checklist

## Changes Made

### ✅ **1. Database Policy Fix**
- ✅ Updated `db/migrations/2025-09-create-profiles.sql`
- ✅ Added proper RLS policies for profiles table
- ✅ Users can only insert/update their own profiles
- ✅ Policies use `auth.uid() = user_id` check

### ✅ **2. Frontend Error Handling Fix**
- ✅ Updated `SignupWithProfile.tsx` with proper error handling
- ✅ Added `errorMsg` state for displaying errors
- ✅ Profile insert failure now signs out user and shows error
- ✅ Uses `window.location.href` for redirect instead of navigate
- ✅ Clears error messages when user starts typing

### ✅ **3. Navbar Auth Handling**
- ✅ Uses `supabase.auth.getSession()` on mount
- ✅ Subscribes to `onAuthStateChange` for real-time updates
- ✅ Fetches profile data when user is signed in
- ✅ No loading spinner - shows auth buttons immediately

## Verification Steps

### Step 1: Database Migration
1. **Run the updated migration in Supabase:**
   - Go to Supabase SQL Editor
   - Copy and paste the updated `2025-09-create-profiles.sql`
   - Click "Run" to execute
   - Verify policies are created successfully

### Step 2: Test Successful Signup
1. **Navigate to signup page:**
   ```
   http://localhost:5173/signup
   ```

2. **Fill in valid form data:**
   - Full Name: "John Doe"
   - Phone: "9876543210"
   - Email: "john.doe@example.com"
   - Password: "password123"
   - Confirm Password: "password123"
   - City: "Mumbai"
   - Target Exam: "JEE Mains"

3. **Submit form and verify:**
   - ✅ Should redirect to home page
   - ✅ Check Supabase `auth.users` table - should have new user
   - ✅ Check Supabase `profiles` table - should have profile with `user_id` linking to user
   - ✅ Navbar should show user dropdown with "John Doe" and avatar "J"

### Step 3: Test Duplicate Email
1. **Try to signup with same email:**
   - Use same email from Step 2
   - Fill other fields differently

2. **Expected behavior:**
   - ✅ Should show Supabase error message (e.g., "User already registered")
   - ✅ Should not redirect
   - ✅ Should stop loading spinner
   - ✅ Should allow user to try again

### Step 4: Test Duplicate Phone
1. **Try to signup with same phone:**
   - Use same phone from Step 2
   - Use different email

2. **Expected behavior:**
   - ✅ Should create auth user successfully
   - ✅ Should fail on profile insert with unique constraint error
   - ✅ Should sign out the user (so they're not stuck half-registered)
   - ✅ Should show error message
   - ✅ Should allow user to try again

### Step 5: Test Profile Data in Navbar
1. **After successful signup:**
   - ✅ Navbar should show avatar with first letter of name
   - ✅ Navbar should show full name from profile
   - ✅ Dropdown should work with Profile, Mock Tests, Logout options

2. **Test profile editing:**
   - Click "Profile" in dropdown
   - Should navigate to `/profile/edit`
   - Should show pre-filled form with signup data

### Step 6: Test Error Message Clearing
1. **Trigger an error:**
   - Try duplicate email signup
   - Should show error message

2. **Start typing:**
   - ✅ Error message should disappear
   - ✅ Should allow new attempt

### Step 7: Test Auth State Updates
1. **Sign out:**
   - Click "Logout" in navbar dropdown
   - ✅ Should redirect to home page
   - ✅ Navbar should show Sign In/Sign Up buttons immediately

2. **Sign in:**
   - Click "Sign In"
   - Use credentials from successful signup
   - ✅ Should redirect to home
   - ✅ Navbar should show user dropdown immediately

## Expected Database State

### After Successful Signup:
```sql
-- auth.users table should have:
id: uuid (auto-generated)
email: "john.doe@example.com"
created_at: timestamp

-- profiles table should have:
id: uuid (auto-generated)
user_id: uuid (matches auth.users.id)
full_name: "John Doe"
phone: "9876543210"
city: "Mumbai"
target_exam: "JEE Mains"
created_at: timestamp
```

## Error Scenarios to Test

### 1. Duplicate Email
- **Expected:** Supabase auth error message
- **Result:** No user created, no profile created

### 2. Duplicate Phone
- **Expected:** Profile insert error, user signed out
- **Result:** User created in auth.users, but signed out and can retry

### 3. Invalid Email Format
- **Expected:** Client-side validation error
- **Result:** Form validation prevents submission

### 4. Weak Password
- **Expected:** Supabase auth error message
- **Result:** No user created, no profile created

### 5. Network Error
- **Expected:** "An unexpected error occurred" message
- **Result:** Loading spinner stops, user can retry

## Troubleshooting

**If profile insert still fails with 403:**
1. Verify RLS policies are correctly applied
2. Check if `auth.uid()` returns the correct user ID
3. Ensure policies use exact policy names from migration

**If user gets stuck half-registered:**
1. Check if `supabase.auth.signOut()` is called on profile error
2. Verify error handling in try-catch block
3. Check browser console for additional errors

**If navbar doesn't update:**
1. Check if `onAuthStateChange` subscription is working
2. Verify profile data is being fetched correctly
3. Check if avatar and name display logic is working

## Success Criteria

- ✅ Successful signup creates both auth user and profile
- ✅ Duplicate email shows friendly error message
- ✅ Duplicate phone signs out user and shows error
- ✅ Navbar updates immediately on auth state changes
- ✅ Profile data displays correctly in navbar
- ✅ Error messages clear when user starts typing
- ✅ No infinite loading states
- ✅ Proper redirects after successful operations
