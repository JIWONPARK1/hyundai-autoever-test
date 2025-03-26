import Link from "next/link";
import { inquireInfoCss } from "./InquireInfo.styles";

export const InquireInfo = () => {
  return (
    <ul css={inquireInfoCss.list}>
      <li>
        <Link
          css={inquireInfoCss.button}
          href="/static/media/proposal.604393960f70e45463b6.pdf"
          download="위블비즈 상품제안서"
        >
          <i css={inquireInfoCss.icDownload}></i>
          <span>상품제안서 다운로드</span>
        </Link>
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
            카톡으로 문의하기 <em>ID: Wible Biz(위블 비즈)</em>
          </span>
        </Link>
      </li>
    </ul>
  );
};
