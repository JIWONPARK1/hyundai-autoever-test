export async function fetchFaqList({
  limit,
  offset,
  tab,
  selectedCategory,
  query,
}: {
  offset: number;
  limit: number;
  tab: string;
  selectedCategory?: string;
  query?: string;
}) {
  const url = new URL("/api/faq", "http://localhost:3000");
  url.searchParams.append("offset", offset.toString());
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("tab", tab);
  if (selectedCategory)
    url.searchParams.append("faqCategoryID", selectedCategory);
  if (query) url.searchParams.append("query", query);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch faq list");
  }
  return response.json();
}
