# Articles Feature Setup Guide

This guide explains how to set up and use the Articles feature in StudentHub.

## Overview

The Articles feature allows you to create, manage, and display educational articles on your platform. Articles are stored in Supabase and can be managed through the backend API.

## Database Setup

### 1. Run the Migration

Execute the SQL migration file to create the articles table:

```sql
-- Run this in your Supabase SQL Editor
-- File: db/migrations/2025-01-create-articles.sql
```

The migration creates:
- `articles` table with all necessary fields
- Indexes for efficient querying
- Row Level Security (RLS) policies
- Automatic `updated_at` timestamp trigger

### 2. Verify Table Creation

After running the migration, verify the table exists in Supabase:
- Go to Supabase Dashboard → Table Editor
- You should see the `articles` table

## Backend Setup

### 1. Articles Router

The articles router is already added to `main.py`:
- Router path: `/api/articles/`
- Full API endpoints:
  - `GET /api/articles/` - List all articles
  - `GET /api/articles/{slug}` - Get article by slug
  - `POST /api/articles/` - Create new article
  - `PUT /api/articles/{article_id}` - Update article
  - `DELETE /api/articles/{article_id}` - Delete article

### 2. Environment Variables

Make sure these are set in your backend `.env`:
```
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Inserting the First Article

You have two options to insert the JEE Main 2026 article:

### Option 1: Via Python Script (Direct Database)

```bash
cd StudentHUb_Backend
python scripts/insert_first_article.py
```

### Option 2: Via API (Recommended)

```bash
# Make sure your backend server is running
cd StudentHUb_Backend
python scripts/insert_article_via_api.py
```

This script will:
- Create the article via the API endpoint
- Automatically generate a slug from the title
- Extract an excerpt from the content
- Set appropriate tags and category

## Frontend Setup

### 1. Routes

The Articles pages are already configured in `App.tsx`:
- `/articles` - Articles listing page
- `/articles/:slug` - Individual article detail page

### 2. Environment Variables

Set in your frontend `.env`:
```
VITE_BACKEND_URL=http://localhost:8000
```

For production, update this to your production backend URL.

### 3. Navigation

The Articles link is available in the Hero section of the homepage, pointing to `/articles`.

## Using the Articles API

### Create an Article

```bash
curl -X POST http://localhost:8000/api/articles/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Article Title",
    "content": "Your article content in markdown format...",
    "author": "Author Name",
    "category": "Category Name",
    "tags": ["tag1", "tag2"],
    "is_published": true
  }'
```

### Get All Articles

```bash
curl http://localhost:8000/api/articles/?published_only=true&limit=50
```

### Get Article by Slug

```bash
curl http://localhost:8000/api/articles/jee-main-2026-preparation-guide
```

## Article Content Format

Articles support markdown-style formatting:

- Headers: `### Header 3`, `#### Header 4`
- Horizontal rules: `***`
- Bullet points: `- **Bold Label:** Description`
- Paragraphs: Separated by blank lines

The frontend automatically formats these when displaying articles.

## Features

- ✅ Automatic slug generation from title
- ✅ Automatic excerpt extraction from content
- ✅ View count tracking
- ✅ Category and tag support
- ✅ Published/unpublished status
- ✅ Search and filter by category
- ✅ Responsive design
- ✅ SEO-friendly URLs (slug-based)

## Testing

1. Start your backend server:
   ```bash
   cd StudentHUb_Backend
   python main.py
   ```

2. Start your frontend:
   ```bash
   cd StudentHub_Frontend
   npm run dev
   ```

3. Navigate to `http://localhost:3000/articles` to see the articles listing

4. Click on an article to view the full content

## Troubleshooting

### Articles not showing up?

1. Check if the articles table exists in Supabase
2. Verify RLS policies allow public read access
3. Check backend logs for API errors
4. Verify `VITE_BACKEND_URL` is set correctly in frontend

### API errors?

1. Check Supabase connection in backend logs
2. Verify service role key has proper permissions
3. Check that the articles table migration ran successfully

### Frontend not connecting to backend?

1. Verify `VITE_BACKEND_URL` environment variable
2. Check CORS settings in backend
3. Check browser console for network errors

## Next Steps

- Add image upload support for featured images
- Add rich text editor for article creation
- Add article editor UI in admin panel
- Add article search functionality
- Add related articles suggestions

