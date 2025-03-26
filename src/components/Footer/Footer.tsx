"use client";

import { footerCss } from "./Footer.styles";

export const Footer = () => {
  return (
    <footer css={footerCss.footer}>
      <div css={footerCss.inner}>
        <div>
          <span css={footerCss.util}>
            <button type="button">
              <b>개인정보 처리방침</b>
            </button>
            <button type="button">이용약관</button>
          </span>
          <address css={footerCss.address}>
            <span>
              서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
            </span>

            <span>
              대표: <i>송호성, 최준영</i>
            </span>

            <span>
              사업자등록번호: <i>119-81-02316</i>
            </span>

            <span>
              통신판매번호: <i>2006-07935</i>
            </span>

            <span>
              고객센터: <i>1833-4964</i>
            </span>
          </address>
        </div>
        <div css={footerCss.copyright}>
          <span>© 2023 KIA CORP. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
