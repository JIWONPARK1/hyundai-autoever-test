import { css } from "@emotion/react";

export const qnqListCss = {
  container: css`
    list-style: none;
    border-top: 2px solid var(--midnight-900);
  `,
  header: css`
    background-color: var(--gray-10);
  `,
  button: css`
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    font-size: var(--faq-list-a-size);
    line-height: 1.4;
    line-height: var(--line-height-sm);
    overflow: hidden;
    padding: var(--faq-list-a-padding-v) 0;
    padding-right: calc(var(--px-xlg) + 1.6em);
    position: relative;
    width: 100%;
    &:after {
      transition: transform 0.4s var(--cubic-bezier-primary),
        -webkit-transform 0.4s var(--cubic-bezier-primary);
      width: var(--ic-md);
      background: url(/ic_qna_arrow.svg) no-repeat;
      background-size: auto 100%;
      content: "";
      height: var(--ic-md);
      position: absolute;
      right: calc((var(--px-xlg) - var(--ic-md)) / 2);
    }
  `,
  open: css`
    &:after {
      transform: rotate(180deg);
    }
  `,
  category: css`
    box-sizing: initial;
    color: #697278;
    color: var(--gray-500);
    padding: 0 var(--faq-list-a-padding-h);
    width: 8em;
  `,
  question: css`
    flex: 1 1;
    padding-left: var(--faq-list-a-padding-h);
    text-align: left;
  `,
  answer: css`
    border-top: 1px solid #e6e8e9;
    border-top: 1px solid var(--gray-100);
    font-size: 1rem !important;
    line-height: 1.8;
    line-height: var(--line-height-lg);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s var(--cubic-bezier-primary);
  `,
  isSpread: css`
    max-height: 1000vh;
  `,
  answerInner: css`
    padding: var(--faq-list-q-padding);
    overflow-x: auto;
  `,
};
