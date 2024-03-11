import { css } from '@emotion/css';
import { IconButton, ArrowLeft, ArrowRight } from 'components';
import { vars } from 'style/vars';
import PageButtons from './PageButtons';

interface PaginationProps {
  selectedPage: number;
  totalItemCount: number;
  itemCountPerPage: number;
  onPageSelect: (page: number) => void;
}

function Pagination({
  selectedPage,
  totalItemCount,
  itemCountPerPage,
  onPageSelect,
}: PaginationProps) {
  const pageButtonCount = Math.ceil(totalItemCount / itemCountPerPage);
  const isfirstPage = selectedPage === 1;
  const isLastPage = selectedPage === pageButtonCount;

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
      `}
    >
      <IconButton
        disabled={isfirstPage}
        onClick={() => {
          onPageSelect(selectedPage - 1);
        }}
      >
        <ArrowLeft
          stroke={isfirstPage ? vars.color.grey500 : vars.color.default}
        />
      </IconButton>

      <PageButtons
        count={pageButtonCount}
        onPageSelect={onPageSelect}
        selectedPage={selectedPage}
      />

      <IconButton
        disabled={isLastPage}
        onClick={() => onPageSelect(selectedPage + 1)}
      >
        <ArrowRight
          stroke={isLastPage ? vars.color.grey500 : vars.color.default}
        />
      </IconButton>
    </div>
  );
}
export default Pagination;
