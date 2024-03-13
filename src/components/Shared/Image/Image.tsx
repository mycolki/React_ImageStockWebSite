import { ReactNode } from 'react';
import { css } from '@emotion/css';
import { vars } from 'style/vars';

function Image({
  width = '200px',
  height = '200px',
  topRightSlot,
  src,
  alt = '',
  onClick,
}: {
  width?: string;
  height?: string;
  topRightSlot?: ReactNode;
  src: string;
  alt?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={css`
        position: relative;
        width: ${width};
        height: ${height};
        border-radius: ${vars.borderRadius.default};
      `}
      onClick={() => onClick?.()}
    >
      <>
        <img
          src={src}
          alt={alt}
          width="100%"
          height="100%"
          className={css`
            border-radius: ${vars.borderRadius.image};
          `}
        />
        <span
          className={css`
            z-index: 10;
            position: absolute;
            top: 0;
            right: 0;
          `}
        >
          {topRightSlot}
        </span>
      </>
    </div>
  );
}
export default Image;
