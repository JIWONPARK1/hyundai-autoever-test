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
    background-image: url(/images/logo_wible_lg.svg);
    height: 100%;
    width: 140px;
    @media (max-width: 1023px) {
      height: 100%;
      width: 110px;
    }
  `,
  sticky: css`
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
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
    @media (max-width: 1023px) {
      background-color: #fff;
      bottom: 0;
      display: flex;
      flex-direction: column;
      left: -100%;
      margin-left: 0;
      padding: 0 var(--side-padding);
      position: fixed;
      top: var(--header-height);
      transition: margin-left 0.8s cubic-bezier(1, 0, 0.2, 1);
      transition: margin-left 0.8s var(--cubic-bezier-primary);
      width: 100%;
      ul {
        margin-top: 80px;
        display: block;
        li {
          color: #000;
          display: block;
          font-size: 24px;
          font-weight: 600;
          line-height: 56px;
          margin-bottom: 8px;
          text-align: center;
          a {
            color: #000;
            display: block;
            font-size: 24px;
            font-weight: 600;
            line-height: 56px;
            margin-bottom: 8px;
            text-align: center;
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
    @media (max-width: 1023px) {
      display: flex;
      flex: 1 1;
      justify-content: flex-end;
      margin-right: -8px;
      button {
        background-image: linear-gradient(
          transparent 9px,
          #000 0,
          #000 11px,
          transparent 0
        );
        font-size: 0;
        height: 40px;
        width: 40px;
        background-position: 0;
        background-repeat: no-repeat;
        border: 10px solid transparent;
        display: inline-block;
        position: relative;
        transition: background-position 0.4s cubic-bezier(1, 0, 0.2, 1);
        transition: background-position 0.4s var(--cubic-bezier-primary);
        &::before,
        &::after {
          background-color: #000;
          content: "";
          height: 2px;
          left: 0;
          position: absolute;
          -webkit-transform-origin: 50%;
          transform-origin: 50%;
          transition: -webkit-transform 0.6s cubic-bezier(1, 0, 0.2, 1);
          transition: transform 0.6s cubic-bezier(1, 0, 0.2, 1);
          transition: transform 0.6s cubic-bezier(1, 0, 0.2, 1),
            -webkit-transform 0.6s cubic-bezier(1, 0, 0.2, 1);
          transition: -webkit-transform 0.6s var(--cubic-bezier-primary);
          transition: transform 0.6s var(--cubic-bezier-primary);
          transition: transform 0.6s var(--cubic-bezier-primary),
            -webkit-transform 0.6s var(--cubic-bezier-primary);
          width: 100%;
        }
        &::before {
          top: 3px;
        }
        &::after {
          bottom: 3px;
        }
      }
    }
  `,
  open: css`
    margin-left: 100% !important;
  `,
  openButton: css`
    background-image: none !important;
    &::before {
      -webkit-transform: translateY(6px) rotate(-45deg) scaleX(1.2);
      transform: translateY(6px) rotate(-45deg) scaleX(1.2);
    }
    &:after {
      -webkit-transform: translateY(-6px) rotate(45deg) scaleX(1.2);
      transform: translateY(-6px) rotate(45deg) scaleX(1.2);
    }
  `,
};
