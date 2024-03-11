import { css } from '@emotion/css';
import { keyframes } from '@emotion/react';
import { vars } from 'cds/vars';

function SkeletonImages({
  width = '200px',
  height = '200px',
  count,
}: {
  width?: string;
  height?: string;
  count: number;
}) {
  return (
    <>
      {Array(count)
        .fill(undefined)
        .map((_, i) => (
          <div
            key={i}
            className={css`
              width: ${width};
              height: ${height};
              border-radius: ${vars.borderRadius.image};
            `}
          >
            <div className={skeletonStyle}></div>
          </div>
        ))}
    </>
  );
}
export default SkeletonImages;

const loading = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.8;
  }
  40% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;
const skeletonStyle = css`
  width: 100%;
  height: 100%;
  border-radius: ${vars.borderRadius.image};
  background: ${vars.color.grey300};
  animation: ${loading} 1s infinite linear;
`;
