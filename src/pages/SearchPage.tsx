import { isNotNil } from 'utils';
import { Pagination } from 'components';
import {
  SearchFormWrapper,
  SearchForm,
  PhotoListWrapper,
  PhotoList,
} from 'components/Photo';
import { useSearchPhoto, useUserByToken } from 'hooks';

const photoCountPerPage = 12;

function SearchPage() {
  const params = new URLSearchParams(window.location.search);
  const initialPage = params.get('page') ? Number(params.get('page')) : 1;
  const initialQuery = params.get('query') ?? '';
  const code = params.get('code');
  const user = useUserByToken(code);

  const { searchTerm, setSearchTerm, data, isLoading, setPage, page } =
    useSearchPhoto({ photoCountPerPage, user, initialPage, initialQuery });

  return (
    <div>
      <SearchFormWrapper>
        <SearchForm searchTerm={searchTerm} onSubmit={setSearchTerm} />
      </SearchFormWrapper>

      <PhotoListWrapper>
        <PhotoList
          list={data?.results}
          isLoading={isLoading}
          photoCount={photoCountPerPage}
        />
      </PhotoListWrapper>

      {isNotNil(data) && data.total > 0 && (
        <Pagination
          selectedPage={page}
          totalItemCount={data.total}
          itemCountPerPage={photoCountPerPage}
          onPageSelect={setPage}
        />
      )}
    </div>
  );
}
export default SearchPage;
