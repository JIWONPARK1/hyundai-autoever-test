import Link from "next/link";
import { appInfoCss } from "./AppInfo.styles";

export const AppInfo = () => {
  return (
    <div css={appInfoCss.container}>
      <h2 css={appInfoCss.title}>
        <em>위블 비즈 App</em> 지금 만나보세요!
      </h2>
      <Link
        href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
        target="_blank"
        rel="noreferrer"
        css={appInfoCss.button}
      >
        <i css={appInfoCss.icGoogle}></i>
        Google Play
      </Link>
      <Link
        css={appInfoCss.button}
        href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
        target="_blank"
        rel="noreferrer"
      >
        <i css={appInfoCss.icApple}></i>
        App Store
      </Link>
    </div>
  );
};
