"use client";

import { qnqListCss } from "./QnqList.styles";
import { QnaItem } from "@/types/qna.type";
import { useState } from "react";
export const QnqList = ({
  category,
  list,
}: {
  category: string;
  list: QnaItem[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(list[0].id);
  return (
    <ul css={qnqListCss.container}>
      {list.map((item: QnaItem) => (
        <li key={item.id}>
          <div css={qnqListCss.header}>
            <button
              type="button"
              css={[
                qnqListCss.button,
                openIndex === item.id && qnqListCss.open,
              ]}
              onClick={() =>
                setOpenIndex(openIndex === item.id ? null : item.id)
              }
            >
              <em css={qnqListCss.category}>{category}</em>
              <strong css={qnqListCss.question}>{item.question}</strong>
            </button>
          </div>
          <div
            css={[
              qnqListCss.answer,
              openIndex === item.id && qnqListCss.isSpread,
            ]}
          >
            <div
              css={qnqListCss.answerInner}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
          ₩
        </li>
      ))}
    </ul>
  );
};
