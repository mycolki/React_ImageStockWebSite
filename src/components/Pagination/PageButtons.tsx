import PageButton from './PageNumber';

interface PageButtonsProps {
  count: number;
  selectedPage: number;
  onPageSelect: (page: number) => void;
}

function PageButtons({ count, selectedPage, onPageSelect }: PageButtonsProps) {
  return (
    <>
      {Array(count)
        .fill(undefined)
        .map((_, i) => {
          const page = i + 1;

          return (
            <PageButton
              key={page}
              currentPage={page}
              selectedPage={selectedPage}
              onPageSelect={onPageSelect}
            />
          );
        })}
    </>
  );
}
export default PageButtons;
