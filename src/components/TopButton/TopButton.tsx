"use client";

import { topButtonCss } from "./TopButton.styles";
import useScroll from "@/hook/useScroll";

export const TopButton = ({}) => {
  const isActive = useScroll();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div css={[topButtonCss.container, !isActive && topButtonCss.hide]}>
      <div css={topButtonCss.inner}>
        <button type="button" css={topButtonCss.button} onClick={handleClick}>
          상단으로
        </button>
      </div>
    </div>
  );
};
