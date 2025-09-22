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

## Security Notes

- All tables have Row Level Security (RLS) enabled
- Users can only access their own profile data
- Phone numbers are enforced to be unique across all users
- User IDs reference auth.users table with cascade delete
