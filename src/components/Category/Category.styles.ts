import { css } from "@emotion/react";

export const categoryCss = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--px-md);
    margin-right: -2px;
  `,
  button: css`
    align-items: center;
    border-radius: calc(var(--btn-md) / 2);
    display: flex;
    font-weight: 600;
    justify-content: center;
    letter-spacing: -0.4px;
    min-width: var(--btn-md);
    padding: 0 var(--space-sm);
    font-size: 18px;
    height: var(--btn-md);
    margin-right: 2px;
    @media (max-width: 1023px) {
      font-size: 16px;
    }
  `,
  selected: css`
    background-color: var(--mint-900);
    color: #fff;
  `,
};
