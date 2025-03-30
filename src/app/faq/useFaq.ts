// src/hooks/useFaq.ts
import { useEffect, useState, useCallback } from "react";
import { useInput } from "@/hooks/useInput";
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

export function useFaq() {
  const PAGE_LIMIT = 10;
  const [list, setList] = useState<FaqItem[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>(initialPageInfo);
  const { value, onChange } = useInput(); // 검색 입력 상태 관리
  const [selectedTab, setSelectedTab] = useState<Tab>(config.tabs[0].id); // 탭 상태 관리
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem>({
    categoryID: "ALL",
    name: "전체",
  }); // 카테고리 상태 관리

  const resetData = useCallback(() => {
    setList([]);
    setPageInfo(initialPageInfo);
  }, []);

  const onChangeTab = useCallback(
    (tab: Tab) => {
      setSelectedTab(tab);
      setSelectedCategory({
        categoryID: "ALL",
        name: "전체",
      });
      resetData();
    },
    [resetData]
  );

  const onChangeCategory = useCallback(
    (category: CategoryItem) => {
      setSelectedCategory(category);
      resetData();
    },
    [resetData]
  );

  const getFaqList = useCallback(async () => {
    const data = await fetchFaqList({
      offset: pageInfo.offset,
      limit: PAGE_LIMIT,
      tab: selectedTab,
      selectedCategory: selectedCategory.categoryID,
    });
    setList((prev) => [...prev, ...data.items]);
    setPageInfo(data.pageInfo);
  }, [pageInfo.offset, selectedTab, selectedCategory.categoryID]);

  // 더보기 클릭시 추가 API 호출
  const loadMore = useCallback(() => {
    setPageInfo({
      ...pageInfo,
      offset: pageInfo.nextOffset,
    });
  }, [pageInfo]);

  useEffect(() => {
    getFaqList();
  }, [selectedTab, value, selectedCategory, pageInfo.offset, getFaqList]);

  return {
    value,
    onChange,
    selectedTab,
    onChangeTab,
    selectedCategory,
    onChangeCategory,
    list,
    hassMore: pageInfo.nextOffset < pageInfo.totalRecord,
    loadMore,
  };
}
