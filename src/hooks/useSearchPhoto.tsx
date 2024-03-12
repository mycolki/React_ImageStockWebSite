import { useCallback, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GetPhoto, PhotoResponse } from 'types/photo';
import { User } from 'types/auth';
import { isNil, sleep } from 'utils';
import { searhPhotos } from 'handlers/photo';
import { useSetLikeCallback } from 'hooks';

interface useSearchPhotoParams {
  photoCountPerPage: number;
  user?: User;
  initialQuery: string;
  initialPage: number;
}

function useSearchPhoto({
  photoCountPerPage,
  user,
  initialQuery,
  initialPage,
}: useSearchPhotoParams) {
  const [page, setPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const queryClient = useQueryClient();
  const setLikeChangeCallback = useSetLikeCallback();

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
      setLikeChangeCallback(() => handleLikeChange);
      return response;
    },
  });

  const handleLikeChange = useCallback(
    (updatedPhoto: GetPhoto) => {
      queryClient.setQueryData<PhotoResponse<GetPhoto>>(
        ['photos', { page, query: searchTerm }],
        (oldData) => {
          if (isNil(oldData)) {
            return undefined;
          }
          return {
            ...oldData,
            results: oldData.results.map((photo) =>
              photo.id === updatedPhoto.id
                ? { ...photo, liked_by_user: updatedPhoto.liked_by_user }
                : photo
            ),
          };
        }
      );
    },
    [page, searchTerm, queryClient]
  );

  return { searchTerm, setSearchTerm, data, isLoading, setPage, page };
}
export default useSearchPhoto;
