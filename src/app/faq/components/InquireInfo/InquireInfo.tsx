import Link from "next/link";
import { inquireInfoCss } from "./InquireInfo.styles";
import { memo } from "react";

export const InquireInfo = memo(() => {
  return (
    <ul css={inquireInfoCss.list}>
      <li>
        <a
          css={inquireInfoCss.button}
          href="/media/proposal.604393960f70e45463b6.pdf"
          download="기아 비즈 서비스 제안서"
        >
          <i css={inquireInfoCss.icDownload}></i>
          <span>서비스 제안서 다운로드</span>
        </a>
      </li>
      <li>
        <Link css={inquireInfoCss.button} href="/Counsel">
          <i css={inquireInfoCss.icWrite}></i>
          <span>상담문의 등록하기</span>
        </Link>
      </li>
      <li>
        <Link
          css={inquireInfoCss.button}
          href="https://pf.kakao.com/_xfLxjdb"
          target="_blank"
          rel="noreferrer"
        >
          <i css={inquireInfoCss.icTalk}></i>
          <span>
            카톡으로 문의하기 <em>ID: 기아 비즈</em>
          </span>
        </Link>
      </li>
    </ul>
  );
});

InquireInfo.displayName = "InquireInfo";
