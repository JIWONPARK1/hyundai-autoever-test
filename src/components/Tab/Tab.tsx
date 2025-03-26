"use client";

import { tabCss } from "./Tab.styles";
import { TabItem } from "@/types/qna.type";

export const Tab = ({
  tabs,
  selectedTab,
  setSelectedTab,
}: {
  tabs: TabItem[];
  selectedTab: string;
  setSelectedTab: (id: string) => void;
}) => {
  return (
    <ul css={tabCss.container}>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          css={[tabCss.item, selectedTab === tab.id && tabCss.selected]}
        >
          <button css={tabCss.button} onClick={() => setSelectedTab(tab.id)}>
            <span>{tab.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
