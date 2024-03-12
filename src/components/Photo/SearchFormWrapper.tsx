import { ReactNode } from 'react';
import { css } from '@emotion/css';
import { vars } from 'style/vars';

function SearchFormWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        background-image: url('src/assets/main-top-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 180px;
        object-fit: fill;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          width: 45%;
          text-align: left;
          gap: 12px;
        `}
      >
        <div
          className={css`
            color: ${vars.color.white};
            font-size: ${vars.fontSize.titleSm};
            font-weight: ${vars.fontWeight[800]};
          `}
        >
          Under The Sea
        </div>
        <p
          className={css`
            color: ${vars.color.white};
            font-size: ${vars.fontSize.sm};
            font-weight: ${vars.fontWeight[500]};
            white-space: pre-wrap;
          `}
        >
          인터넷의 시각 자료 출처입니다.
          <br />
          모든 지역에 있는 크리에이터들의 지원을 받습니다.
        </p>
        {children}
      </div>
    </div>
  );
}
export default SearchFormWrapper;
