"use client";

import Link from "next/link";
import { headerCss } from "./Header.styles";

export const Header = () => {
  return (
    <header css={headerCss.header}>
      <div css={headerCss.container}>
        <Link css={headerCss.logo} href="/">
          Wible BIZ
        </Link>
        <nav css={headerCss.nav}>
          <ul>
            <li>
              <Link href="/Guide">서비스 소개</Link>
            </li>
            <li css={headerCss.active}>
              <Link href="/FAQ">자주 묻는 질문</Link>
            </li>
            <li>
              <Link href="/News">새소식</Link>
            </li>
            <li>
              <Link href="/Counsel">상담문의</Link>
            </li>
          </ul>
        </nav>
        <span css={headerCss.util}>
          <button type="button" css={headerCss.nav} data-ui-click="nav-toggle">
            메뉴 열기/닫기
          </button>
        </span>
      </div>
    </header>
  );
};
