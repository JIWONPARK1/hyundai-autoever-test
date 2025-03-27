// src/hooks/useFaq.ts
import { useEffect, useState, useCallback } from "react";
import { useInput } from "@/hooks/useInput";
import { fetchFaqList } from "@/service/api";
import { config } from "./config";
import { Tab } from "@/types/faq.type";

export function useFaq() {
  const [list, setList] = useState([]);
  const { value, onChange } = useInput(); // 검색 입력 상태 관리
  const [selectedTab, setSelectedTab] = useState<Tab>(config.tabs[0].id); // 탭 상태 관리
  const [selectedCategory, setSelectedCategory] = useState({
    categoryID: "ALL",
    name: "전체",
  }); // 카테고리 상태 관리

  const onChangeTab = useCallback((tab: Tab) => {
    setSelectedTab(tab);
    setSelectedCategory({
      categoryID: "ALL",
      name: "전체",
    });
  }, []);

  const getFaqList = useCallback(async () => {
    const data = await fetchFaqList(selectedTab, selectedCategory.categoryID);
    setList(data);
  }, [selectedTab, selectedCategory]);

  useEffect(() => {
    getFaqList();
  }, [selectedTab, value, selectedCategory, getFaqList]);

  return {
    value,
    onChange,
    selectedTab,
    onChangeTab,
    selectedCategory,
    setSelectedCategory,
    list,
  };
}
