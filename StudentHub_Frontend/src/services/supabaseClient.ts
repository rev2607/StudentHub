import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Prefer frontend-exposed envs (Vite) for browser usage
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (supabase) return supabase;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Not configured in this environment
    return null;
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return supabase;
}

export async function fetchNewsFromSupabase(limit = 10) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase not configured") };

  const { data, error } = await client
    .from("news_articles")
    .select("title,date,snippet,link,image_url")
    .order("date", { ascending: false })
    .limit(limit);

  return { data, error } as const;
}


