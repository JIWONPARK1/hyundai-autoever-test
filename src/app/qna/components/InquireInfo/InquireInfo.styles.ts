import { css } from "@emotion/react";

export const inquireInfoCss = {
  list: css`
    display: flex;
    margin: 0 calc(var(--space-md) * -1 / 2);
    li {
      background-color: #fff;
      border: 1px solid var(--midnight-900);
      flex: 1 1;
      margin: 0 calc(var(--space-md) / 2);
      font-weight: 600;
      font-size: var(--btn-xxlg-size);
    }
  `,
  button: css`
    align-items: center;
    display: inline-flex;
    padding: 0 1.4em;
    justify-content: center;
    height: var(--btn-xxlg);
    min-height: var(--btn-xxlg);
    width: 100%;
    em {
      color: var(--gray-500);
      display: block;
      font-size: 14px;
      font-weight: 400;
    }
    i {
      display: inline-block;
      height: var(--ic-lg);
      margin-right: 8px;
      width: var(--ic-lg);
    }
  `,
  icDownload: css`
    background-image: url("/ic_download.svg");
  `,
  icWrite: css`
    background-image: url("/ic_write.svg");
  `,
  icTalk: css`
    background-image: url("/ic_talk.svg");
  `,
};
