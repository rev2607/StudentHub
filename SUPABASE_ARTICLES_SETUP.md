# Articles Setup - Direct Frontend to Supabase

This guide explains how to set up Articles using direct frontend-to-Supabase connection (no backend required).

## Database Setup

### 1. Run the Migration

Execute the SQL migration in your Supabase SQL Editor:

```sql
-- Run: db/migrations/2025-01-create-articles.sql
```

This creates the `articles` table with RLS policies that allow public read access.

### 2. Verify RLS Policies

Make sure the RLS policy allows public read access:
- Policy: "Allow public read access to published articles"
- This allows anyone to read published articles without authentication

## Frontend Setup

### 1. Environment Variables

Make sure these are set in your frontend `.env`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Articles Service

The `articlesService.ts` handles all Supabase operations:
- `getArticles()` - Fetch all articles
- `getArticleBySlug()` - Get single article (auto-increments view count)
- `createArticle()` - Create new article (note: may require service role for inserts)

### 3. Pages

- **ArticlesLandingPage** - Lists all published articles
- **ArticleDetailPage** - Shows full article content

## Inserting the First Article

### Option 1: Via Supabase Dashboard (Recommended)

1. Go to Supabase Dashboard → Table Editor → `articles`
2. Click "Insert" → "Insert row"
3. Fill in the fields:

```json
{
  "title": "JEE Main 2026 Preparation Guide: Smart Strategies for Top Ranks",
  "slug": "jee-main-2026-preparation-guide-smart-strategies-for-top-ranks",
  "content": "<paste the full article content>",
  "excerpt": "The Joint Entrance Examination (JEE) Main is one of the most competitive exams in India...",
  "author": "StudentHub Team",
  "category": "Exam Preparation",
  "tags": ["JEE Main", "JEE 2026", "Exam Preparation", "Study Tips", "Engineering"],
  "is_published": true
}
```

4. Click "Save"

### Option 2: Via SQL in Supabase

Run this SQL in Supabase SQL Editor:

```sql
INSERT INTO articles (
  title, 
  slug, 
  content, 
  excerpt, 
  author, 
  category, 
  tags, 
  is_published
) VALUES (
  'JEE Main 2026 Preparation Guide: Smart Strategies for Top Ranks',
  'jee-main-2026-preparation-guide-smart-strategies-for-top-ranks',
  '<paste full article content here>',
  'The Joint Entrance Examination (JEE) Main is one of the most competitive exams in India, serving as a gateway to NITs, IIITs, and as a qualifier for JEE Advanced. With lakhs of students appearing each year, cracking it requires more than just hard work—it demands strategy, consistency, and clarity.',
  'StudentHub Team',
  'Exam Preparation',
  ARRAY['JEE Main', 'JEE 2026', 'Exam Preparation', 'Study Tips', 'Engineering'],
  true
);
```

### Option 3: Via Browser Console (If you have service role access)

If you have admin access, you can use the JavaScript script:

1. Open browser console on your site
2. Run the script from `scripts/insert_article.js`
3. Make sure you have service role key access

## Testing

1. Start your frontend:
   ```bash
   cd StudentHub_Frontend
   npm run dev
   ```

2. Navigate to `http://localhost:3000/articles`

3. You should see the articles listing page

4. Click on an article to view it

## Features

✅ **Direct Supabase Connection** - No backend API needed
✅ **Automatic Slug Generation** - From article titles
✅ **Automatic Excerpt Extraction** - From content
✅ **View Count Tracking** - Auto-increments on article view
✅ **Category & Tags** - For filtering and organization
✅ **Published Status** - Control visibility
✅ **Responsive Design** - Works on all devices
✅ **Markdown Support** - Formatted article content

## Creating Articles

Currently, creating articles requires:
1. Service role key (for direct Supabase writes), OR
2. Supabase Dashboard, OR
3. SQL directly in Supabase

To enable article creation from the frontend:
1. Update RLS policies to allow authenticated users to insert
2. Or create an admin panel with service role access

## Troubleshooting

### Articles not showing?

1. **Check RLS Policies**: Make sure "Allow public read access" policy exists
2. Check `is_published = true` for articles
3. Verify Supabase URL and key in frontend `.env`

### Permission errors?

- RLS policies might block reads - verify public read policy exists
- For inserts, you need service role key or authenticated user with insert permissions

### View count not updating?

- Check that the update query in `getArticleBySlug()` is working
- Verify RLS allows updates (or use service role)

## Next Steps

- Add admin panel for article creation
- Add image upload for featured images
- Add article search functionality
- Add related articles feature


