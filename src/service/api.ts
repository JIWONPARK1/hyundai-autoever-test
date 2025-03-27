export async function fetchFaqList(tab?: string, selectedCategory?: string) {
  const url = new URL("/api/faq", "http://localhost:3000");
  if (tab) url.searchParams.append("tab", tab);
  if (selectedCategory)
    url.searchParams.append("faqCategoryID", selectedCategory);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch faq list");
  }
  return response.json();
}
