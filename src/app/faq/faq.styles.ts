import { css } from "@emotion/react";

export const faqCss = {
  container: css`
    margin: 0 auto;
    max-width: 1336px;
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
  loadMoreButton: css`
    align-items: center;
    display: flex;
    font-size: var(--list-more-size);
    height: var(--btn-xlg2);
    justify-content: center;
    margin-top: calc(var(--px-lg) - 8px);
    width: 100%;
    i {
      height: calc(var(--list-more-size) - 4px);
      margin-right: 4px;
      margin-top: -2px;
      position: relative;
      transition: -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
      transition: transform 0.4s cubic-bezier(1, 0, 0.2, 1);
      transition: transform 0.4s cubic-bezier(1, 0, 0.2, 1),
        -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
      transition: -webkit-transform 0.4s var(--cubic-bezier-primary);
      transition: transform 0.4s var(--cubic-bezier-primary);
      transition: transform 0.4s var(--cubic-bezier-primary),
        -webkit-transform 0.4s var(--cubic-bezier-primary);
      width: calc(var(--list-more-size) - 4px);
      &:before,
      &:after {
        background-color: #05141f;
        background-color: var(--midnight-900);
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        top: calc(50% - 1px);
        width: 100%;
      }
      &:after {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }
  `,
};
