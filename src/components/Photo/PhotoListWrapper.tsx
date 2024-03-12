import { ReactNode, memo } from 'react';
import { css } from '@emotion/css';
import { vars } from 'style/vars';

const PhotoListWrapper = memo(function PhotoListWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 28px 0px;
          gap: 20px;
        `}
      >
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(4, ${vars.size.photoImage});
            gap: 20px;
          `}
        >
          {children}
        </div>
      </div>
    </>
  );
});
export default PhotoListWrapper;
