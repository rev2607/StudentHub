# Database Migrations

## Setup Instructions

### Running Migrations

1. **Via Supabase Dashboard (Recommended)**
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Copy and paste the contents of `2025-09-create-profiles.sql`
   - Click "Run" to execute the migration

2. **Via psql (Alternative)**
   ```bash
   # Connect to your Supabase database
   psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   
   # Run the migration
   \i db/migrations/2025-09-create-profiles.sql
   ```

## Migration Files

- `2025-09-create-profiles.sql` - Creates the profiles table with RLS policies

## Security Notes

- All tables have Row Level Security (RLS) enabled
- Users can only access their own profile data
- Phone numbers are enforced to be unique across all users
- User IDs reference auth.users table with cascade delete
