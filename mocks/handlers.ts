// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { qnaData } from "@/app/qna/data";
import { QnaItem } from "@/types/qna.type";

export const handlers = [
  http.get("/api/qna", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const search = url.searchParams.get("search");
    // Mock 데이터 필터링 로직 추가 (예: 탭과 검색어 기반)
    const filteredItems = qnaData.items.filter((item: QnaItem) => {
      return (
        (!tab || item.tab === tab) &&
        (!search || item.question.includes(search))
      );
    });

    return HttpResponse.json({ items: filteredItems });
  }),
];
