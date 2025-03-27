"use client";

import { FaqItem } from "@/types/faq.type";
import { faqListCss } from "./FaqList.styles";
import { useState } from "react";
export const FaqList = ({
  category,
  list,
}: {
  category: string;
  list: FaqItem[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul css={faqListCss.container}>
      {list.map((item: FaqItem) => (
        <li key={item.id}>
          <div css={faqListCss.header}>
            <button
              type="button"
              css={[
                faqListCss.button,
                openIndex === item.id && faqListCss.open,
              ]}
              onClick={() =>
                setOpenIndex(openIndex === item.id ? null : item.id)
              }
            >
              <em css={faqListCss.category}>{category}</em>
              <strong css={faqListCss.question}>{item.question}</strong>
            </button>
          </div>
          <div
            css={[
              faqListCss.answer,
              openIndex === item.id && faqListCss.isSpread,
            ]}
          >
            <div
              css={faqListCss.answerInner}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
