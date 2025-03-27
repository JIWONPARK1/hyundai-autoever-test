import { css } from "@emotion/react";

export const footerCss = {
  footer: css`
    background-color: #05141f;
    background-color: var(--midnight-900);
    color: #82898f;
    color: var(--gray-400);
    padding: 0 var(--side-padding);
    position: relative;
    @media (max-width: 743px) {
      --font-md: 12px;
      --font-lg: 14px;
      --line-height: 22px;
    }
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
    @media (max-width: 743px) {
      flex-direction: column;
      padding-bottom: 29px;
      padding-top: 18px;
      > div {
        width: 100%;
      }
    }
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
    @media (max-width: 743px) {
      justify-content: flex-start;
      button {
        margin: 0;
        line-height: 48px;
        line-height: 48px;
        margin-right: 16px;
      }
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
    @media (max-width: 743px) {
      width: 100%;
      margin-right: 12px;
      margin-left: 0;
      text-align: left;
      span {
        display: block;
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
    @media (max-width: 743px) {
      text-align: left;
      &:before {
        height: 32px;
        margin-bottom: 1px;
      }
    }
  `,
};
