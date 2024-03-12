import PageButton from './PageNumber';

interface PageButtonsProps {
  count: number;
  selectedPage: number;
  onPageSelect: (page: number) => void;
}

function PageButtons({ count, selectedPage, onPageSelect }: PageButtonsProps) {
  return (
    <>
      {generatePageNumbers(count, selectedPage).map((page) => (
        <PageButton
          key={page}
          currentPage={page}
          selectedPage={selectedPage}
          onPageSelect={onPageSelect}
        />
      ))}
    </>
  );
}
export default PageButtons;

function generatePageNumbers(count: number, selectedPage: number) {
  const pageLimit = 5;
  const pageNumbers = [];

  let start = 1;
  let end = count;

  if (count > pageLimit) {
    const center = Math.ceil(pageLimit / 2);
    start = Math.max(1, selectedPage - center + 1);
    end = Math.min(count, start + pageLimit - 1);

    if (end - start + 1 < pageLimit) {
      start = end - pageLimit + 1;
    }
  }

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}
