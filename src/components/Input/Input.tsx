import { inputCss } from "./Input.styles";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div css={inputCss.container}>
      <div css={inputCss.inputWrap}>
        <input type="text" {...props} css={inputCss.input} />
        <button
          type="button"
          css={[inputCss.clearButton, props.value && inputCss.inputFocus]}
        >
          다시입력
        </button>
        <button type="button" css={inputCss.submitButton}>
          검색
        </button>
      </div>
    </div>
  );
};
