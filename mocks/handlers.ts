// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { faqData } from "@/app/faq/data";
import { Tab, Category } from "@/types/faq.type";

export const handlers = [
  http.get("/api/faq", ({ request }) => {
    const url = new URL(request.url);
    const tab: Tab = url.searchParams.get("tab") as Tab;
    const faqCategoryID: Category = url.searchParams.get(
      "faqCategoryID"
    ) as Category;

    const tabItems = faqData[tab];
    if (faqCategoryID === "ALL") {
      const allItems = Object.values(tabItems).flatMap((item) => item);
      return HttpResponse.json(allItems);
    } else {
      const filteredItems = tabItems[faqCategoryID as keyof typeof tabItems];
      return HttpResponse.json(filteredItems);
    }
  }),
];
