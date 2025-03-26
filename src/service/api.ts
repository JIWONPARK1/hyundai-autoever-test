export const fetchQnaList = async () => {
  const response = await fetch("/api/items");
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return response.json();
};
