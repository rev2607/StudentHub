# Database Migrations

## Important: Supabase Auth Configuration

Before testing the signup flow, ensure your Supabase project is configured correctly:

1. **Add Redirect URLs** in Supabase Dashboard:
   - Go to **Authentication → Settings → URL Configuration**
   - Add `http://localhost:5173` to **Site URL**
   - Add `http://localhost:5173/**` to **Redirect URLs**
   - Add `http://localhost:5173` to **Additional Redirect URLs** (if available)

2. **Email Confirmation Settings**:
   - Go to **Authentication → Settings → Auth Providers → Email**
   - If "Confirm email" is enabled, users will need to confirm their email before signing in
   - For development, you can disable email confirmation for faster testing

## Setup Instructions

### Running Migrations

1. **Via Supabase Dashboard (Recommended)**
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Copy and paste the contents of `2025-09-fix-profiles-rls.sql`
   - Click "Run" to execute the migration

2. **Via psql (Alternative)**
   ```bash
   # Connect to your Supabase database
   psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   
   # Run the migration
   \i db/migrations/2025-09-fix-profiles-rls.sql
   ```

### Important: Run the RLS Fix Migration

**You must run `2025-09-fix-profiles-rls.sql` to fix the signup flow.** This migration:
- Enables Row Level Security on the profiles table
- Creates proper policies so users can insert their own profiles during signup
- Fixes the 403 RLS errors that prevent profile creation

## Migration Files

- `2025-09-create-profiles.sql` - Creates the profiles table with RLS policies
- `2025-09-fix-profiles-rls.sql` - Fixes RLS policies for profiles table (run this one)

## RLS Policies Compatibility

The current RLS policies support the following operations:

### ✅ **SELECT** - Users can view their own profile
```sql
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = user_id);
```

### ✅ **INSERT** - Users can create their own profile (during signup)
```sql
CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### ✅ **UPDATE** - Users can update their own profile (in ProfileEdit)
```sql
CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

### Required SQL to Run

**Copy and run this SQL in Supabase SQL Editor:**

```sql
-- Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create safe policies for profiles table
CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

## Setup Instructions

### 1. Configure Environment Variables
Create `.env` file in `StudentHub_Frontend/`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 2. Configure Supabase Auth Settings
In Supabase Dashboard → Authentication → Settings:
- **Site URL**: `http://localhost:5173`
- **Redirect URLs**: Add `http://localhost:5173`

### 3. Run Database Migration
Copy and run the SQL from `2025-09-fix-profiles-rls.sql` in Supabase SQL Editor.

## Authentication Flow Verification

After setup:

1. **Sign up** with a fresh email
2. **Check console** for `AUTH EVENT` logs:
   - `AUTH EVENT SIGNED_IN`
   - `AUTH EVENT SIGNED_OUT` 
   - `AUTH EVENT TOKEN_REFRESHED`
3. **Verify** navbar updates immediately on auth state changes
4. **Test** sign out functionality
5. **Check** profiles table for new user entries

## Security Notes

- All tables have Row Level Security (RLS) enabled
- Users can only access their own profile data
- Phone numbers are enforced to be unique across all users
- User IDs reference auth.users table with cascade delete
- Only anon key used in frontend (no service role key)

## News Caching Setup (NEW)

### 1. Create News Articles Table

Run the following SQL in your Supabase SQL Editor:

```sql
-- Run the contents of: 2025-09-create-news-articles.sql
```

### 2. Backend Environment Variables

Add these to your `.env` file in the backend:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. News Caching Features

- **Hourly Updates**: News is automatically fetched from Perplexity API every hour
- **Startup Cache**: Initial news is fetched when backend starts
- **Supabase Storage**: All news is cached in `news_articles` table
- **Public Read Access**: Frontend fetches from `/api/news` endpoint
- **Manual Refresh**: Use `POST /api/news/refresh` for manual updates

### 4. Testing News Caching

1. Start the backend server
2. Check logs for "Running scheduled news refresh..."
3. Call `GET /api/news` endpoint
4. Verify data appears in Supabase `news_articles` table

## Troubleshooting

- **403 RLS errors**: Ensure `2025-09-fix-profiles-rls.sql` has been run
- **Email confirmation issues**: Check Supabase Auth settings
- **Redirect loops**: Verify Redirect URLs include `http://localhost:5173`
- **Missing env vars**: Restart dev server after updating `.env`
- **News not loading**: Check Supabase credentials and news_articles table exists
