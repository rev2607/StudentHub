import { supabase } from '../lib/supabaseClient';

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author: string;
  featured_image_url?: string;
  category: string;
  tags: string[];
  view_count: number;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface ArticleFilters {
  category?: string;
  limit?: number;
  offset?: number;
  published_only?: boolean;
}

/**
 * Get all articles with optional filtering
 */
export async function getArticles(filters: ArticleFilters = {}): Promise<Article[]> {
  try {
    const {
      category,
      limit = 50,
      offset = 0,
      published_only = true
    } = filters;

    let query = supabase
      .from('articles')
      .select('*');

    if (published_only) {
      query = query.eq('is_published', true);
    }

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getArticles:', error);
    return [];
  }
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return null;
      }
      console.error('Error fetching article:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in getArticleBySlug:', error);
    return null;
  }
}

/**
 * Create a new article (requires service role key - typically done server-side)
 * This is kept for reference but may not work with anon key due to RLS
 */
export async function createArticle(article: {
  title: string;
  content: string;
  author?: string;
  featured_image_url?: string;
  category?: string;
  tags?: string[];
  is_published?: boolean;
}): Promise<Article | null> {
  try {
    // Generate slug from title
    const slug = article.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    // Extract excerpt (first 200 chars or first paragraph)
    const paragraphs = article.content.split('\n\n').filter(p => p.trim());
    let excerpt = paragraphs[0] || article.content;
    if (excerpt.length > 200) {
      excerpt = excerpt.substring(0, 200).replace(/\s+\S*$/, '') + '...';
    }

    const articleData = {
      title: article.title,
      slug,
      content: article.content,
      excerpt,
      author: article.author || 'StudentHub Team',
      featured_image_url: article.featured_image_url || null,
      category: article.category || 'General',
      tags: article.tags || [],
      is_published: article.is_published ?? true,
      published_at: article.is_published ? new Date().toISOString() : null
    };

    const { data, error } = await supabase
      .from('articles')
      .insert(articleData)
      .select()
      .single();

    if (error) {
      console.error('Error creating article:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createArticle:', error);
    return null;
  }
}

