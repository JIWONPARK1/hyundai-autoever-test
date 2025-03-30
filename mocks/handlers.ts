// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { faqData } from "@/app/faq/data";
import { Tab, Category, FaqItem } from "@/types/faq.type";

export const handlers = [
  http.get("/api/faq", ({ request }) => {
    const url = new URL(request.url);
    const tab: Tab = url.searchParams.get("tab") as Tab;
    const offset: number = parseInt(url.searchParams.get("offset") || "0");
    const limit: number = parseInt(url.searchParams.get("limit") || "10");
    const faqCategoryID: Category = url.searchParams.get(
      "faqCategoryID"
    ) as Category;

    let items: FaqItem[] = [];
    const tabItems = faqData[tab];

    const pageInfo = {
      offset,
      limit,
      prevOffset: offset - limit,
      nextOffset: offset + limit,
    };

    if (faqCategoryID === "ALL") {
      items = Object.values(tabItems).flatMap((item) => item);
    } else {
      items = tabItems[faqCategoryID as keyof typeof tabItems];
    }

    console.log("offset, limit, items============", offset, limit, items);
    return HttpResponse.json({
      items: items.slice(offset, offset + limit),
      pageInfo: {
        ...pageInfo,
        totalRecord: items.length,
      },
    });
  }),
];
