export async function fetchFaqList({
  limit,
  offset,
  tab,
  selectedCategory,
}: {
  offset: number;
  limit: number;
  tab: string;
  selectedCategory?: string;
}) {
  const url = new URL("/api/faq", "http://localhost:3000");
  url.searchParams.append("offset", offset.toString());
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("tab", tab);
  if (selectedCategory)
    url.searchParams.append("faqCategoryID", selectedCategory);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch faq list");
  }
  return response.json();
}
