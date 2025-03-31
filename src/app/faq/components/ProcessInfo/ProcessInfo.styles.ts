import { css } from "@emotion/react";

export const processInfoCss = {
  list: css`
    counter-reset: li;
    display: flex;
    line-height: 1.4;
    line-height: var(--line-height-sm);
    margin: 0 calc(var(--space-md) * -1 / 2);
    li {
      flex: 1 1;
      margin: 0 calc(var(--space-md) / 2);
      padding: 0 24px;
      i {
        display: block;
        height: var(--ic-xlg);
        margin-bottom: 8px;
        width: var(--ic-xlg);
        background-size: auto 100%;
        flex: none;
      }
      span {
        display: block;
        position: relative;
      }
      strong {
        display: block;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      em {
        color: var(--gray-700);
        display: block;
        font-size: 16px;
        margin-top: 8px;
      }
      &:not(:first-of-type) span:before {
        background: url(/images/ic_step_arrow.svg) no-repeat;
        background-size: auto 100%;
        content: "";
        height: 24px;
        left: -36px;
        position: absolute;
        top: 0;
        width: 24px;
      }
    }
    @media (max-width: 1023px) {
      flex-direction: column;
      gap: 24px 0;
      li {
        display: flex;
        padding: 0 !important;
        strong {
          font-size: 16px;
        }
        em {
          font-size: 14px;
          margin-top: 4px;
        }
        i {
          margin: 0 16px 0 0;
        }
      }
    }
    @media (max-width: 767px) {
      gap: 20px;
    }
  `,
  iconProcess1: css`
    background-image: url(/images/ic_process01.svg);
  `,
  iconProcess2: css`
    background-image: url(/images/ic_process02.svg);
  `,
  iconProcess3: css`
    background-image: url(/images/ic_process03.svg);
  `,
  iconProcess4: css`
    background-image: url(/images/ic_process04.svg);
  `,
};
