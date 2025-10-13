import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNewsPage, getTopMajor } from "../../features/news/news.api";
import type { NewsArticle } from "../../features/news/news.types";
import TopNewsHero from "../../components/news/TopNewsHero";
import NewsSearchFilters from "../../components/news/NewsSearchFilters";
import NewsCard from "../../components/news/NewsCard";
import Pagination from "../../components/news/Pagination";

function useQueryParams() {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location.search]);
}

const DEFAULT_PAGE_SIZE = 20;

export default function NewsLandingPage() {
  const navigate = useNavigate();
  const params = useQueryParams();

  const [q, setQ] = useState<string>(params.get("q") || "");
  const [selectedExams, setSelectedExams] = useState<string[]>(
    params.get("exams") ? params.get("exams")!.split(",").filter(Boolean) : []
  );
  const [page, setPage] = useState<number>(parseInt(params.get("page") || "1", 10) || 1);

  const [topMajor, setTopMajor] = useState<NewsArticle[]>([]);
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      const next = new URLSearchParams();
      if (q) next.set("q", q);
      if (selectedExams.length > 0) next.set("exams", selectedExams.join(","));
      if (page > 1) next.set("page", String(page));
      navigate({ pathname: "/news", search: next.toString() }, { replace: true });
    }, 300);
    return () => clearTimeout(timer);
  }, [q, selectedExams, page, navigate]);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    (async () => {
      try {
        const [majors, pageRes] = await Promise.all([
          getTopMajor(3),
          getNewsPage({ q, exams: selectedExams, page, pageSize: DEFAULT_PAGE_SIZE }),
        ]);
        if (!active) return;
        // Keep only articles with a real image (exclude placeholders)
        const isValidImage = (url?: string | null) => {
          if (!url || typeof url !== 'string') return false;
          if (!url.startsWith('http')) return false;
          if (url === 'https://placehold.co/400x300/4ade80/ffffff?text=News') return false;
          if (url.includes('placehold.co') && url.includes('text=News')) return false;
          return true;
        };
        const majorsWithImages = majors.filter(a => isValidImage(a.image_url));
        let poolWithImages = pageRes.items.filter(a => isValidImage(a.image_url));
        // Backfill the topMajor to ensure 3 items by pulling from pool items not in majors
        const majorIds = new Set(majorsWithImages.map(a => a.id));
        const fillers = poolWithImages.filter(a => !majorIds.has(a.id)).slice(0, Math.max(0, 3 - majorsWithImages.length));
        const topFilled = [...majorsWithImages, ...fillers].slice(0, 3);
        setTopMajor(topFilled);

        // Ensure the grid's last row is filled: if remainder 1 or 2, fetch from next page and append up to the deficit
        const remainder = poolWithImages.length % 3;
        if (remainder !== 0) {
          const deficit = 3 - remainder;
          try {
            const nextPageRes = await getNewsPage({ q, exams: selectedExams, page: page + 1, pageSize: DEFAULT_PAGE_SIZE });
            const nextWithImages = nextPageRes.items.filter(a => isValidImage(a.image_url));
            const existingIds = new Set(poolWithImages.map(a => a.id));
            const toAppend = nextWithImages.filter(a => !existingIds.has(a.id)).slice(0, deficit);
            poolWithImages = [...poolWithImages, ...toAppend];
          } catch (_) {
            // ignore fill failure
          }
        }

        setItems(poolWithImages);
        setTotal(pageRes.total);
      } catch (e) {
        console.error(e);
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [q, selectedExams, page]);

  const totalPages = Math.max(1, Math.ceil(total / DEFAULT_PAGE_SIZE));

  // Filter out articles that are already shown in the top major section
  const topMajorIds = new Set(topMajor.map(article => article.id));
  const filteredItems = items.filter(article => !topMajorIds.has(article.id));

  const handleCardClick = (a: NewsArticle) => {
    navigate(`/news/${a.slug}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top section with filters and updated info */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-gray-500">Updated hourly</div>
        {/* Filters moved to top right */}
        <NewsSearchFilters
          q={q}
          onQChange={(val) => { setPage(1); setQ(val); }}
          selectedExams={selectedExams}
          onToggleExam={(tag) => { setPage(1); setSelectedExams((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]); }}
          onClear={() => { setQ(""); setSelectedExams([]); setPage(1); }}
        />
      </div>

      {/* Top Major Strip */}
      {topMajor.length > 0 && <TopNewsHero items={topMajor} onSelect={handleCardClick} />}

      {/* Latest Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 rounded-2xl bg-gray-100 animate-pulse" />
          ))
        ) : filteredItems.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-600">
            No articles found. Try clearing filters.
          </div>
        ) : (
          filteredItems.map((a) => (
            <NewsCard key={a.id} article={a} onClick={() => handleCardClick(a)} />
          ))
        )}
      </div>

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} onPrev={() => setPage((p) => Math.max(1, p - 1))} onNext={() => setPage((p) => Math.min(totalPages, p + 1))} />
    </div>
  );
}


