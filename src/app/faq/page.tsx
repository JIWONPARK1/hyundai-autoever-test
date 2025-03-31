// src/app/faq/FaqClient.tsx
"use client";

import { Tab } from "@/components/Tab/Tab";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Category } from "@/components/Category/Category";
import { faqCss } from "./faq.styles";
import { FaqList } from "./components/FaqList/FaqList";
import { InquireInfo } from "./components/InquireInfo/InquireInfo";
import { ProcessInfo } from "./components/ProcessInfo/ProcessInfo";
import { AppInfo } from "./components/AppInfo/AppInfo";
import { useFaq } from "./useFaq";
import { config } from "./config";

export default function Faq() {
  const {
    selectedTab,
    onChangeTab,
    selectedCategory,
    onChangeCategory,
    list,
    hassMore,
    loadMore,
    searchQuery,
    onChangeSearchQuery,
    onSubmit,
  } = useFaq();

  return (
    <div css={faqCss.container}>
      <h2 css={faqCss.title}>
        자주 묻는 질문<em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h2>
      <Tab
        tabs={config.tabs}
        selectedTab={selectedTab}
        onChangeTab={onChangeTab}
      />
      <SearchInput
        value={searchQuery}
        onChange={onChangeSearchQuery}
        onSubmit={onSubmit}
      />
      <Category
        categorys={config.categorys[selectedTab]}
        selectedCategory={selectedCategory}
        onChangeCategory={onChangeCategory}
      />
      <FaqList list={list} />
      {hassMore && (
        <button css={faqCss.loadMoreButton} type="button" onClick={loadMore}>
          <i></i>더보기
        </button>
      )}
      <h3 css={faqCss.subTitle}>서비스 문의</h3>
      <InquireInfo />
      <h3 css={faqCss.subTitle}>이용 프로세스 안내</h3>
      <ProcessInfo />
      <AppInfo />
    </div>
  );
}
