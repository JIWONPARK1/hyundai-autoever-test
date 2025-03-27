import { processInfoCss } from "./ProcessInfo.styles";

export const ProcessInfo = () => {
  return (
    <ol css={processInfoCss.list}>
      <li>
        <i css={processInfoCss.iconProcess1}></i>
        <span>
          <strong>1. 문의 등록</strong>
          <em>상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.</em>
        </span>
      </li>
      <li>
        <i css={processInfoCss.iconProcess2}></i>
        <span>
          <strong>2. 관리자 설정</strong>
          <em>관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.</em>
        </span>
      </li>
      <li>
        <i css={processInfoCss.iconProcess3}></i>
        <span>
          <strong>3. 임직원 가입</strong>
          <em>사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.</em>
        </span>
      </li>
      <li>
        <i css={processInfoCss.iconProcess4}></i>
        <span>
          <strong>4. 서비스 이용</strong>
          <em>사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!</em>
        </span>
      </li>
    </ol>
  );
};
