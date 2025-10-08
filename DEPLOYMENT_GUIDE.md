# StudentHub Vercel Deployment Guide

## Prerequisites
1. Vercel account (free tier available)
2. Supabase account (free tier available)
3. Git repository (GitHub recommended)

## Step 1: Prepare Your Repository

### Frontend Setup
✅ **Already configured:**
- `vercel.json` created in `StudentHub_Frontend/`
- Data files copied to `StudentHub_Frontend/public/data/`
- Build scripts updated

### Backend Setup
Your FastAPI backend (`StudentHUb_Backend/`) can be deployed separately or as Vercel serverless functions. For now, we'll focus on frontend deployment.

## Step 2: Database Setup (Supabase)

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization
   - Enter project details
   - Wait for setup to complete

2. **Run Database Migrations:**
   - Go to SQL Editor in your Supabase dashboard
   - Execute each migration file from `db/migrations/` in order:
     ```
     2025-09-create-profiles.sql
     2025-09-create-news-articles.sql
     2025-09-fix-profiles-rls.sql
     2025-09-phone-check-constraint.sql
     2025-09-add-image-url-to-news.sql
     ```

3. **Get Your Credentials:**
   - Go to Settings > API
   - Copy your Project URL
   - Copy your `anon` (public) key
   - Copy your `service_role` key (keep this secret!)

## Step 3: Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy Frontend:**
   ```bash
   cd StudentHub_Frontend
   vercel
   ```
   - Follow the prompts
   - Choose your project settings
   - Set the root directory to `StudentHub_Frontend`

4. **Set Environment Variables:**
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_ANON_KEY
   ```
   - Enter your Supabase URL and anon key when prompted

### Method 2: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `StudentHub_Frontend`
   - Configure environment variables

## Step 4: Environment Variables

Set these in your Vercel project dashboard:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Deploy Backend (Optional)

If you want to deploy your FastAPI backend:

1. **Create Vercel Functions:**
   - Create `api/` folder in your frontend
   - Convert FastAPI routes to Vercel serverless functions

2. **Alternative: Deploy separately:**
   - Use Railway, Render, or Heroku for backend
   - Update frontend to point to new backend URL

## Step 6: Test Your Deployment

1. **Check Frontend:**
   - Visit your Vercel URL
   - Verify all pages load correctly
   - Test data loading from `/data/` folder

2. **Check Database Connection:**
   - Test user registration/login
   - Verify news articles load
   - Check college data displays

## Step 7: Custom Domain (Optional)

1. **Add Domain in Vercel:**
   - Go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are in `package.json`

2. **Environment Variables:**
   - Ensure all `VITE_` prefixed variables are set
   - Check for typos in variable names

3. **Database Connection:**
   - Verify Supabase credentials
   - Check RLS policies
   - Test API endpoints

4. **Static Assets:**
   - Ensure data files are in `public/data/`
   - Check file paths in your code

### Support:
- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- Your project's `database-setup.md` for database-specific issues

## Post-Deployment

1. **Monitor Performance:**
   - Use Vercel Analytics
   - Monitor Supabase usage

2. **Set up CI/CD:**
   - Enable automatic deployments
   - Set up preview deployments for PRs

3. **Backup Strategy:**
   - Regular database backups
   - Version control for all code changes
