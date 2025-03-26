import { css } from "@emotion/react";

export const headerCss = {
  header: css`
    background-color: #fff;
    padding: 0 var(--side-padding);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  `,
  container: css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: var(--header-height);
    margin: 0 auto;
    max-width: 1660px;
    max-width: var(--max-width);
  `,
  logo: css`
    background-position: 0 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    font-size: 0;
    background-image: url(/logo_wible_lg.svg);
    height: 100%;
    width: 160px;
  `,
  nav: css`
    flex: 1 1;
    margin-right: -20px;
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 16px;
        a {
          color: #000;
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: var(--header-height);
          padding: 0 4px;
          position: relative;
          &:after {
            background-color: #70d7bf;
            background-color: var(--mint-900);
            bottom: 0;
            content: "";
            height: 4px;
            left: 0;
            opacity: 0.4;
            position: absolute;
            transition: width 0.4s cubic-bezier(1, 0, 0.2, 1);
            transition: width 0.4s var(--cubic-bezier-primary);
            width: 0;
          }
        }
      }
    }
  `,
  active: css`
    a {
      &:after {
        width: 100%;
      }
    }
  `,
  util: css`
    display: none;
  `,
};
