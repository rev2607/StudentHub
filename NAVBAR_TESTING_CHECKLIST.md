# Navbar Authentication Testing Checklist

## Prerequisites
- Frontend development server running on `http://localhost:5173`
- Supabase database with profiles table created
- At least one test user account created via signup

## Test Cases

### 1. Not Signed In State
**Expected Behavior:**
- ✅ Navbar shows "Sign In" text link
- ✅ Navbar shows "Sign Up" green rounded button
- ✅ No user dropdown menu visible
- ✅ Mobile menu shows "Sign In" and "Sign Up" options

**Test Steps:**
1. Ensure you're logged out (clear browser session if needed)
2. Navigate to `http://localhost:5173`
3. Verify navbar displays Sign In/Sign Up buttons
4. Test mobile view - open hamburger menu
5. Verify mobile menu shows auth options

### 2. Signed In State (with profile)
**Expected Behavior:**
- ✅ Navbar shows user dropdown with full name (from profile)
- ✅ Dropdown contains: Profile, Mock Tests, Logout
- ✅ User icon and name visible on desktop
- ✅ Mobile menu shows welcome message and auth options

**Test Steps:**
1. Sign up for a new account with profile data
2. Navigate to home page
3. Verify navbar shows user dropdown with full name
4. Click dropdown - verify menu items
5. Test mobile view - verify user info displayed

### 3. Signed In State (without profile)
**Expected Behavior:**
- ✅ Navbar shows user dropdown with email (fallback)
- ✅ Dropdown contains: Profile, Mock Tests, Logout
- ✅ User icon and email visible on desktop

**Test Steps:**
1. Create a user account but don't create profile
2. Navigate to home page
3. Verify navbar shows email instead of name
4. Test dropdown functionality

### 4. Dropdown Menu Functionality
**Expected Behavior:**
- ✅ Clicking user area opens dropdown
- ✅ Clicking outside closes dropdown
- ✅ Profile link navigates to `/profile/edit`
- ✅ Mock Tests link navigates to `/mock-tests`
- ✅ Logout signs out user and redirects to home

**Test Steps:**
1. While signed in, click on user dropdown
2. Verify dropdown opens
3. Click outside dropdown - should close
4. Click "Profile" - should navigate to profile edit
5. Click "Mock Tests" - should navigate to mock tests
6. Click "Logout" - should sign out and redirect to home

### 5. Mobile Responsiveness
**Expected Behavior:**
- ✅ Hamburger menu works on mobile
- ✅ Auth section appears in mobile menu
- ✅ Mobile menu closes when clicking outside
- ✅ Mobile menu closes when clicking menu items

**Test Steps:**
1. Resize browser to mobile width (< 768px)
2. Click hamburger menu icon
3. Verify mobile menu opens with auth section
4. Test clicking outside to close
5. Test clicking menu items to navigate and close

### 6. Auth State Changes
**Expected Behavior:**
- ✅ Navbar updates immediately when user signs in
- ✅ Navbar updates immediately when user signs out
- ✅ Profile data loads after signup completion

**Test Steps:**
1. Start logged out - verify Sign In/Up buttons
2. Sign in - verify navbar immediately shows user dropdown
3. Sign out - verify navbar immediately shows Sign In/Up buttons
4. Sign up with profile - verify navbar shows full name after redirect

### 7. Loading States
**Expected Behavior:**
- ✅ Loading spinner shows while checking auth state
- ✅ Smooth transitions between states

**Test Steps:**
1. Refresh page while signed in
2. Verify loading spinner appears briefly
3. Verify user dropdown appears after loading

### 8. Navigation Links
**Expected Behavior:**
- ✅ All navigation links work correctly
- ✅ Logo link goes to home page
- ✅ Menu items navigate to correct pages

**Test Steps:**
1. Test all navigation links (Home, Results, News, etc.)
2. Test logo click
3. Test menu item navigation

## Expected Visual Design

### Desktop
- **Not signed in:** Sign In (text link) + Sign Up (green button) on right
- **Signed in:** User icon + name + dropdown arrow on right
- **Dropdown:** Clean white dropdown with hover effects

### Mobile
- **Not signed in:** Hamburger menu with Sign In/Sign Up in mobile menu
- **Signed in:** Hamburger menu with user info and auth options

## Troubleshooting

**If navbar doesn't update after auth:**
- Check browser console for errors
- Verify Supabase connection
- Check if auth state subscription is working

**If profile name doesn't show:**
- Verify profile was created during signup
- Check if user has profile data in database
- Verify RLS policies allow profile access

**If dropdown doesn't close:**
- Check if click-outside handler is working
- Verify refs are properly attached

**If mobile menu issues:**
- Check responsive breakpoints
- Verify mobile menu state management
- Test touch interactions
