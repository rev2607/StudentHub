export type NewsSource = {
  title?: string;
  url: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  slug?: string | null;
  image_url?: string | null;
  date_published?: string | null; // ISO
  exams?: string[] | null;
  is_major?: boolean | null;
  summary?: string | null;
  full_text?: string | null;
  sources?: NewsSource[] | null;
  popularity_score?: number | null;
  created_at?: string | null;
};

export type GetNewsPageParams = {
  q?: string;
  exams?: string[];
  page?: number;
  pageSize?: number;
};

export type GetNewsPageResult = {
  items: NewsArticle[];
  total: number;
};


