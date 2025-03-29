"use client";

import { footerCss } from "./Footer.styles";

export const Footer = () => {
  return (
    <footer css={footerCss.footer}>
      <div css={footerCss.inner}>
        <div>
          <div css={footerCss.util}>
            <button type="button">
              <b>개인정보 처리방침</b>
            </button>
            <button type="button">이용약관</button>
          </div>
          <address css={footerCss.address}>
            <span>
              서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
            </span>

            <span>
              대표: <em>송호성, 최준영</em>
            </span>

            <span>
              사업자등록번호: <em>119-81-02316</em>
            </span>

            <span>
              통신판매번호: <em>2006-07935</em>
            </span>

            <span>
              고객센터: <em>1833-4964</em>
            </span>
            <span>
              제휴문의: <a href="mailto:wible.biz@kia.com">wible.biz@kia.com</a>
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
