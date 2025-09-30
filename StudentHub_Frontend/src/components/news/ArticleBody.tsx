type Props = {
  summary?: string | null;
  full_text?: string | null;
};

export default function ArticleBody({ summary, full_text }: Props) {
  return (
    <div className="prose max-w-none">
      {summary && (
        <p className="text-lg text-gray-800 mb-4">{summary}</p>
      )}
      {full_text ? (
        <pre className="whitespace-pre-wrap font-sans text-base leading-7">{full_text}</pre>
      ) : (
        <p className="text-gray-600">No content available.</p>
      )}
    </div>
  );
}


