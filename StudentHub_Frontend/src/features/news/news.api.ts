import { supabase } from "../../lib/supabaseClient";
import type { GetNewsPageParams, GetNewsPageResult, NewsArticle } from "./news.types";

const TABLE = "news_articles";

function normalizeArticle(row: any): NewsArticle {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug ?? null,
    image_url: row.image_url ?? null,
    // Prefer existing 'date' column; fallback to created_at
    date_published: row.date_published ?? row.date ?? row.created_at ?? null,
    exams: row.exams ?? null,
    is_major: row.is_major ?? null,
    // Prefer summary; fallback to existing 'snippet'
    summary: row.summary ?? row.snippet ?? null,
    full_text: row.full_text ?? null,
    // Prefer sources; fallback to single link object if present
    sources: row.sources ?? (row.link ? [{ url: row.link }] : null),
    popularity_score: row.popularity_score ?? null,
    created_at: row.created_at ?? null,
  };
}

export async function getTopMajor(limit = 3): Promise<NewsArticle[]> {
  // Try majors first (column may not exist in minimal schema)
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("is_major", true)
      .order("date_published", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) throw error;
    const items = (data || []).map(normalizeArticle);
    if (items.length > 0) return items;
  } catch (_) {
    // ignore and fallback
  }

  // Fallback to latest by existing columns
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) throw error;
    return (data || []).map(normalizeArticle);
  } catch (_) {
    const { data } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);
    return (data || []).map(normalizeArticle);
  }
}

export async function getNewsPage(params: GetNewsPageParams): Promise<GetNewsPageResult> {
  const page = Math.max(1, params.page || 1);
  const pageSize = Math.max(1, Math.min(100, params.pageSize || 20));
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let base = supabase.from(TABLE).select("*", { count: "exact" });

  if (params.q && params.q.trim() !== "") {
    const q = params.q.trim();
    // Search title or snippet (existing)
    base = base.or(`title.ilike.%${q}%,snippet.ilike.%${q}%`);
  }

  // Skip exams filter: not present in baseline schema

  try {
    const { data, error, count } = await base
      .order("date", { ascending: false })
      .order("created_at", { ascending: false })
      .range(from, to);
    if (error) throw error;
    return {
      items: (data || []).map(normalizeArticle),
      total: count || 0,
    };
  } catch (_) {
    const { data, count } = await base
      .order("created_at", { ascending: false })
      .range(from, to);
    return {
      items: (data || []).map(normalizeArticle),
      total: count || 0,
    };
  }
}

export async function getArticle(id: string): Promise<NewsArticle | null> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();
  if (error && (error as any).code !== "PGRST116") throw error; // not found tolerant
  return data ? normalizeArticle(data) : null;
}

export async function getRelated(id: string, args: { exams?: string[] | null; limit?: number }): Promise<NewsArticle[]> {
  const limit = args.limit ?? 6;
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .neq("id", id)
    .order("date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data || []).map(normalizeArticle);
}


