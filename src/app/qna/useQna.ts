// src/hooks/useQna.ts
import { useState } from "react";
import { useInput } from "@/hooks/useInput";
import { useQuery } from "@tanstack/react-query";
import { fetchQnaList } from "@/service/api";
import { config } from "./config";

export function useQna() {
  const { value, onChange } = useInput(); // 검색 입력 상태 관리
  const [selectedTab, setSelectedTab] = useState<string>(config.tabs[0].id); // 탭 상태 관리
  const [selectedCategory, setSelectedCategory] = useState(
    config.categorys[config.tabs[0].id][0]
  ); // 카테고리 상태 관리

  // React Query로 데이터 가져오기
  const { data } = useQuery({
    queryKey: ["qnaList"],
    queryFn: fetchQnaList,
  });

  return {
    value,
    onChange,
    selectedTab,
    setSelectedTab,
    selectedCategory,
    setSelectedCategory,
    data,
  };
}
