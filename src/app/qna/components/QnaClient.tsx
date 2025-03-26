// src/app/qna/QnaClient.tsx
"use client";

import { Tab } from "@/components/Tab/Tab";
import { Input } from "@/components/Input/Input";
import { Category } from "@/components/Category/Category";
import { qnaCss } from "../qna.styles";
import { QnqList } from "./QnqList/QnqList";
import { InquireInfo } from "./InquireInfo/InquireInfo";
import { ProcessInfo } from "./ProcessInfo/ProcessInfo";
import { AppInfo } from "./AppInfo/AppInfo";
import { useQna } from "../useQna";
import { config } from "../config";

export default function QnaClient() {
  const {
    value,
    onChange,
    selectedTab,
    setSelectedTab,
    selectedCategory,
    setSelectedCategory,
    data,
  } = useQna();

  return (
    <div css={qnaCss.container}>
      <h2 css={qnaCss.title}>
        자주 묻는 질문<em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h2>
      <Tab
        tabs={config.tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <form>
        <Input
          placeholder="찾으시는 내용을 입력해 주세요"
          value={value}
          onChange={onChange}
        />
      </form>
      <Category
        categorys={config.categorys[selectedTab]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <QnqList category={selectedCategory.name} list={data?.items} />
      <h3 css={qnaCss.subTitle}>서비스 문의</h3>
      <InquireInfo />
      <h3 css={qnaCss.subTitle}>이용 프로세스 안내</h3>
      <ProcessInfo />
      <AppInfo />
    </div>
  );
}
