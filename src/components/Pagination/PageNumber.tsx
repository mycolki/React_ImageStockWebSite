import { css } from '@emotion/css';
import { vars } from 'style/vars';

interface PageButtonProps {
  currentPage: number;
  selectedPage: number;
  onPageSelect: (page: number) => void;
}

function PageButton({
  currentPage,
  selectedPage,
  onPageSelect,
}: PageButtonProps) {
  return (
    <button
      key={currentPage}
      onClick={() => {
        onPageSelect(currentPage);
      }}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        font-size: ${vars.fontSize.sm};
        cursor: pointer;
        background-color: ${currentPage === selectedPage
          ? vars.color.grey400
          : 'transparent'};
        color: ${currentPage === selectedPage
          ? vars.color.white
          : vars.color.default};
        :active {
          background-color: ${vars.color.grey300};
          color: ${vars.color.white};
        }
      `}
    >
      {currentPage}
    </button>
  );
}
export default PageButton;
