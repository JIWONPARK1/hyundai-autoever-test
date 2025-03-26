import { css } from "@emotion/react";

export const appInfoCss = {
  container: css`
    background-color: var(--gray-10);
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 48px;
    overflow: hidden;
    padding: 32px;
  `,
  title: css`
    font-size: 24px;
    line-height: var(--line-height-sm);
    margin-bottom: 24px;
    text-align: center;
    width: 100%;
    em {
      color: var(--mint-900);
    }
  `,
  button: css`
    align-items: center;
    background: #fff;
    border-radius: 8px;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 60px;
    justify-content: center;
    margin: 0 8px;
    width: 296px;
    i {
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: "";
      height: 28px;
      margin-right: 4px;
      width: 28px;
    }
  `,
  icGoogle: css`
    background-image: url(/logo_googleplay.svg);
  `,
  icApple: css`
    background-image: url(/logo_appstore.svg);
  `,
};
