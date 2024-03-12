import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searhPhotos } from 'handlers/photo';
import { useUserByToken } from 'hooks';
import { sleep, isNotNil } from 'utils';
import { Pagination } from 'components';
import {
  SearchFormWrapper,
  SearchForm,
  PhotoListWrapper,
  SearchedPhotoList,
} from 'components/Photo';

const photoCountPerPage = 12;

function SearchPhotoPage() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const initialPage = params.get('page') ? Number(params.get('page')) : 1;
  const initialQuery = params.get('query') ?? '';

  const [page, setPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const user = useUserByToken(code);

  const { data, isLoading } = useQuery({
    queryKey: ['photos', { page, searchTerm }],
    enabled: searchTerm !== '',
    queryFn: async () => {
      const [response] = await Promise.all([
        searhPhotos({
          page,
          perPage: photoCountPerPage,
          token: user?.access_token,
          query: searchTerm,
        }),
        sleep(1500),
      ]);

      window.history.replaceState(
        null,
        '',
        `?page=${page}&query=${searchTerm}`
      );

      return response;
    },
  });

  return (
    <div>
      <SearchFormWrapper>
        <SearchForm searchTerm={searchTerm} onSubmit={setSearchTerm} />
      </SearchFormWrapper>

      <PhotoListWrapper>
        <SearchedPhotoList
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
export default SearchPhotoPage;
