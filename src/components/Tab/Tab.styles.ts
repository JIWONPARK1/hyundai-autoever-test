import { css } from "@emotion/react";

export const tabCss = {
  container: css`
    display: flex;
    margin-bottom: var(--px-lg);
  `,
  item: css`
    background-color: #fff;
    border: 1px solid var(--midnight-100);
    flex: 1 1;
    min-height: var(--btn-xlg2);
  `,
  button: css`
    align-items: center;
    color: inherit;
    display: flex;
    height: 100%;
    justify-content: center;
    line-height: 1.1;
    padding: 8px;
    text-align: center;
    width: 100%;
    font-size: var(--tab-fsize);
  `,
  selected: css`
    background-color: var(--midnight-900);
    border-color: #05141f;
    border-color: var(--midnight-900);
    color: #fff;
    position: relative;
    button {
      font-weight: 600;
    }
  `,
};
