// src/hooks/useFaq.ts
import { useEffect, useState, useCallback } from "react";
import { fetchFaqList } from "@/service/api";
import { config } from "./config";
import { Tab, PageInfo, FaqItem, CategoryItem } from "@/types/faq.type";

const initialPageInfo: PageInfo = {
  totalRecord: 0,
  offset: 0,
  limit: 10,
  prevOffset: 0,
  nextOffset: 0,
};

const initialCategory: CategoryItem = {
  categoryID: "ALL",
  name: "전체",
};

export function useFaq() {
  const PAGE_LIMIT = 10;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [list, setList] = useState<FaqItem[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>(initialPageInfo);
  const [selectedTab, setSelectedTab] = useState<Tab>(config.tabs[0].id); // 탭 상태 관리
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryItem>(initialCategory); // 카테고리 상태 관리

  const getFaqList = useCallback(
    async ({
      tab,
      categoryID,
      query,
      offset,
    }: {
      offset: number;
      tab?: Tab;
      categoryID?: string;
      query?: string;
    }) => {
      const data = await fetchFaqList({
        offset,
        limit: PAGE_LIMIT,
        tab: tab || selectedTab,
        selectedCategory: categoryID || selectedCategory.categoryID,
        query: query || "",
      });

      setList((prev) => [...prev, ...data.items]);
      setPageInfo(data.pageInfo);
    },
    [selectedTab, selectedCategory.categoryID]
  );

  const resetData = useCallback(() => {
    setList([]);
    setSearchQuery("");
    setPageInfo(initialPageInfo);
  }, []);

  const onChangeTab = useCallback(
    (tab: Tab) => {
      if (tab === selectedTab) {
        return;
      }
      resetData();
      setSelectedTab(tab);
      setSelectedCategory(initialCategory);
      getFaqList({
        offset: 0,
        tab,
        categoryID: initialCategory.categoryID,
      });
    },
    [getFaqList, resetData, selectedTab]
  );

  const onChangeCategory = useCallback(
    (category: CategoryItem) => {
      if (category.categoryID === selectedCategory.categoryID) {
        return;
      }
      resetData();
      setSelectedCategory(category);
      getFaqList({
        offset: 0,
        categoryID: category.categoryID,
      });
    },
    [getFaqList, resetData, selectedCategory.categoryID]
  );

  const onChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = useCallback(() => {
    if (searchQuery.length > 0) {
      setList([]);
      getFaqList({
        offset: 0,
        query: searchQuery,
      });
    } else {
      alert("검색어를 입력해주세요.");
    }
  }, [getFaqList, searchQuery]);

  // 더보기 클릭시 추가 API 호출
  const loadMore = useCallback(() => {
    setPageInfo({
      ...pageInfo,
      offset: pageInfo.nextOffset,
    });

    getFaqList({
      tab: selectedTab,
      categoryID: selectedCategory.categoryID,
      offset: pageInfo.nextOffset,
    });
  }, [getFaqList, pageInfo, selectedCategory.categoryID, selectedTab]);

  useEffect(() => {
    getFaqList({
      offset: 0,
      tab: selectedTab,
      categoryID: selectedCategory.categoryID,
    });
  }, []);

  return {
    selectedTab,
    onChangeTab,
    selectedCategory,
    onChangeCategory,
    list,
    hassMore: pageInfo.nextOffset < pageInfo.totalRecord,
    loadMore,
    searchQuery,
    onChangeSearchQuery,
    onSubmit,
  };
}
