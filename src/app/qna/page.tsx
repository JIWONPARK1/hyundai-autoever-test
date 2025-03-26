"use client";

import { Tab } from "@/components/Tab/Tab";
import { config } from "./config";
import { Input } from "@/components/Input/Input";
import { useInput } from "@/hooks/useInput";
import { Category } from "@/components/Category/Category";
import { useState } from "react";
import { data } from "./data";
import { QnqList } from "./components/QnqList/QnqList";
import { qnaCss } from "./qna.styles";
import { InquireInfo } from "./components/InquireInfo/InquireInfo";
import { ProcessInfo } from "./components/ProcessInfo/ProcessInfo";
import { AppInfo } from "./components/AppInfo/AppInfo";

export default function Qna() {
  const { value, onChange } = useInput();
  const [list, setList] = useState<Array<(typeof data.items)[0]>>(data.items);
  const [selectedTab, setSelectedTab] = useState<string>(config.tabs[0].id);
  const [selectedCategory, setSelectedCategory] = useState(
    config.categorys[selectedTab][0]
  );

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
      <QnqList category={selectedCategory.name} list={list} />
      <h3 css={qnaCss.subTitle}>서비스 문의</h3>
      <InquireInfo />
      <h3 css={qnaCss.subTitle}>이용 프로세스 안내</h3>
      <ProcessInfo />
      <AppInfo />
    </div>
  );
}
