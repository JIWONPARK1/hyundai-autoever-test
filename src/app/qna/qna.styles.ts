import { css } from "@emotion/react";

export const qnaCss = {
  container: css`
    margin: 0 auto;
    max-width: 1240px;
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    overflow: hidden;
    padding: 0 var(--side-padding) var(--bottom-padding);
  `,
  title: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: var(--h1-fsize);
    height: var(--h1-height);
    justify-content: center;
    line-height: 1.4;
    em {
      font-size: var(--h1-fsize-sm);
      font-weight: 400;
      line-height: var(--line-height-md);
      margin-top: 0.4em;
      text-align: center;
      word-break: keep-all;
    }
  `,
  subTitle: css`
    font-size: var(--heading-2);
    margin: var(--heading-2-margin);
    line-height: var(--line-height-sm);
  `,
};
