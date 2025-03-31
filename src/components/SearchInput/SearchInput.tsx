"use client";

import { searchInputCss } from "./SearchInput.styles";

export const SearchInput = ({
  onSubmit,
  ...props
}: {
  onSubmit: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} css={searchInputCss.container}>
      <div css={searchInputCss.inputWrap}>
        <input
          type="text"
          placeholder="찾으시는 내용을 입력해 주세요"
          value={props.value}
          onChange={props.onChange}
          css={searchInputCss.input}
        />
        <button
          type="button"
          css={[
            searchInputCss.clearButton,
            props.value && searchInputCss.inputFocus,
          ]}
        >
          다시입력
        </button>
        <button type="submit" css={searchInputCss.submitButton}>
          검색
        </button>
      </div>
    </form>
  );
};
