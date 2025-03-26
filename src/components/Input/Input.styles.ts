import { css } from "@emotion/react";

export const inputCss = {
  container: css`
    display: flex;
    gap: 10px;
    width: 100%;
    background-color: var(--gray-10);
    margin-bottom: var(--px-md);
    padding: var(--px-md);
    justify-content: center;
  `,
  inputWrap: css`
    width: var(--search-bar-width);
    position: relative;
  `,
  input: css`
    width: 100%;
    border-color: var(--midnight-900);
    font-size: 1rem;
    height: var(--btn-xlg2);
    padding-left: 16px;
    padding-right: calc(
      var(--ic-sm) + var(--clear-space) + var(--btn-xlg2) - 2px
    );
  `,
  button: css`
    border: none;
    background-color: transparent;
    cursor: pointer;
  `,
  clearButton: css`
    align-items: center;
    display: flex;
    font-size: 0;
    height: calc(100% - 2px);
    justify-content: center;
    position: absolute;
    right: 1px;
    top: 1px;
    width: calc(var(--ic-sm) + var(--clear-space));
    right: calc(-1px + var(--btn-xlg2));
  `,
  submitButton: css`
    align-items: center;
    display: flex;
    font-size: 0;
    height: calc(100% - 2px);
    justify-content: center;
    position: absolute;
    right: 1px;
    top: 1px;
    width: calc(var(--btn-xlg2) - 2px);
    &:before {
      background: url(/ic_search.svg) no-repeat;
      background-size: auto 100%;
      content: "";
      height: var(--ic-md);
      width: var(--ic-md);
    }
  `,
  inputFocus: css`
    &:before {
      background: url(/ic_clear.svg) no-repeat;
      background-size: auto 100%;
      content: "";
      height: var(--ic-sm);
      width: var(--ic-sm);
    }
  `,
};
