# Database Setup for StudentHub

## Supabase Database Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and API keys

### 2. Run Database Migrations
Execute the following SQL files in your Supabase SQL Editor:

1. **Create Profiles Table** (`db/migrations/2025-09-create-profiles.sql`)
2. **Create News Articles Table** (`db/migrations/2025-09-create-news-articles.sql`)
3. **Fix Profiles RLS** (`db/migrations/2025-09-fix-profiles-rls.sql`)
4. **Add Phone Check Constraint** (`db/migrations/2025-09-phone-check-constraint.sql`)
5. **Add Image URL to News** (`db/migrations/2025-09-add-image-url-to-news.sql`)

### 3. Import Static Data
Your college data from `/data/colleges/iit_roorkee.json` will be served as static files through the frontend.

### 4. Environment Variables
Set these in your Vercel project:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for backend)

### 5. Row Level Security (RLS)
Make sure RLS policies are enabled for your tables as per the migration files.
