import { css } from "@emotion/react";

export const footerCss = {
  footer: css`
    background-color: #05141f;
    background-color: var(--midnight-900);
    color: #82898f;
    color: var(--gray-400);
    padding: 0 var(--side-padding);
    position: relative;

    --font-md: 14px;
    --font-lg: 16px;
    --line-height: 24px;

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
    font-size: var(--font-md);

    @media (max-width: 1023px) {
      flex-direction: column;
      padding-bottom: 44px;
      padding-top: 34px;
      align-items: flex-start;
      justify-content: space-between;
    }
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
    @media (max-width: 1023px) {
      justify-content: flex-start;
      button {
        margin-left: 0;
        line-height: 52px;
        margin-right: 24px;
      }
    }
    @media (max-width: 743px) {
      justify-content: flex-start;
      margin-bottom: 0;
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
      em,
      a {
        color: var(--gray-400);
        margin-left: 4px;
      }
      a {
        text-decoration: underline;
      }
    }
    @media (max-width: 1023px) {
      text-align: left;
      span {
        margin-left: 0;
        margin-right: 12px;
      }
    }
    @media (max-width: 743px) {
      width: 100%;
      margin-right: 12px;
      margin-left: 0;
      text-align: left;
      span {
        display: block;
        &:last-of-type,
        &:nth-of-type(5) {
          display: inline-block;
        }
      }
    }
  `,
  copyright: css`
    &:before {
      background-image: url(/images/logo_kia.svg);
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: "";
      display: block;
      height: 56px;
      margin-bottom: 2px;
    }
    @media (max-width: 1023px) {
      &:before {
        height: 48px;
      }
    }
    @media (max-width: 743px) {
      text-decoration: underline;
      text-align: left;
      &:before {
        height: 32px;
        margin-bottom: 1px;
      }
    }
  `,
};
