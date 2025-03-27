"use client";

import { tabCss } from "./Tab.styles";
import { TabItem, Tab as TabType } from "@/types/faq.type";

export const Tab = ({
  tabs,
  selectedTab,
  onChangeTab,
}: {
  tabs: TabItem[];
  selectedTab: TabType;
  onChangeTab: (id: TabType) => void;
}) => {
  return (
    <ul css={tabCss.container}>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          css={[tabCss.item, selectedTab === tab.id && tabCss.selected]}
        >
          <button css={tabCss.button} onClick={() => onChangeTab(tab.id)}>
            <span>{tab.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
