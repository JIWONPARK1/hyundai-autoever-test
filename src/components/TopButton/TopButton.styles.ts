import { css } from "@emotion/react";

export const topButtonCss = {
  container: css`
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    z-index: 99;
  `,
  inner: css`
    --size: 56px;
    align-items: center;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 32px;
    -webkit-transform: scale3d(1);
    transform: scale3d(1);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    width: var(--size);
    @media (max-width: 1023px) {
      font-size: 16px;
    }
  `,
  button: css`
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28px;
    border-radius: 50%;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    font-size: 0;
    height: var(--size);
    margin-top: 8px;
    opacity: 1;
    pointer-events: all;
    position: relative;
    transition-duration: 0.4s;
    transition-property: width, height, margin, background-position, opacity;
    transition-timing-function: cubic-bezier(1, 0, 0.2, 1);
    transition-timing-function: var(--cubic-bezier-primary);
    width: var(--size);
    background-image: url(/images/ic_top.svg);
  `,
  hide: css`
    button {
      background-position: 50% 100%;
      height: 0;
      margin: 0;
      opacity: 0;
      transition-duration: 0.4s;
      transition-property: width, height, margin, background-position, opacity;
      transition-timing-function: cubic-bezier(1, 0, 0.2, 1);
      transition-timing-function: var(--cubic-bezier-primary);
      width: 0;
    }
  `,
};
