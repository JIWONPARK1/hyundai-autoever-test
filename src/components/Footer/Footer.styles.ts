import { css } from "@emotion/react";

export const footerCss = {
  footer: css`
    background-color: #05141f;
    background-color: var(--midnight-900);
    color: #82898f;
    color: var(--gray-400);
    padding: 0 var(--side-padding);
    position: relative;
  `,
  inner: css`
    display: flex;
    font-size: var(--font-md);
    height: var(--footer-height);
    justify-content: space-between;
    line-height: var(--line-height);
    margin: 0 auto;
    max-width: 1660px;
    max-width: var(--max-width);
    align-items: center;
    flex-direction: row-reverse;
  `,
  util: css`
    justify-content: flex-end;
    margin-bottom: 10px;
    display: flex;
    button {
      color: #fff;
      font-size: var(--font-lg);
      line-height: var(--line-height);
      margin-left: 24px;
    }
  `,
  address: css`
    text-align: right;
    span {
      display: inline-flex;
      margin-left: 12px;
      i {
        margin-left: 4px;
      }
    }
  `,
  copyright: css`
    text-decoration: underline;
    &:before {
      background-image: url(/logo_kia.svg);
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: "";
      display: block;
      height: 56px;
      margin-bottom: 2px;
    }
  `,
};
