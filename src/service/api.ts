// src/service/api.ts
export async function fetchQnaList(tab?: string, search?: string) {
  const url = new URL("/api/qna", "http://localhost:3000");
  if (tab) url.searchParams.append("tab", tab);
  if (search) url.searchParams.append("search", search);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch QnA list");
  }
  return response.json();
}
