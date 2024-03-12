import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { sleep } from 'utils';
import { GetPhoto } from 'types/photo';
import { User } from 'types/auth';
import { getUserLikedPhotos } from 'handlers/photo';
import { useSetLikeCallback } from 'hooks';

function useLikedPhoto({ user }: { user?: User }) {
  const queryClient = useQueryClient();
  const setLikeChangeCallback = useSetLikeCallback();

  const { data, isLoading } = useQuery({
    queryKey: ['user_likes'],
    enabled: user !== undefined,
    queryFn: async () => {
      if (user) {
        const [response] = await Promise.all([
          getUserLikedPhotos(user.username, user.access_token),
          sleep(1500),
        ]);
        setLikeChangeCallback(() => handleLikeChange);
        return response;
      }
    },
  });

  const handleLikeChange = useCallback(
    (updatedPhoto: GetPhoto) => {
      queryClient.setQueryData<GetPhoto[]>(['user_likes'], (oldData) => {
        if (oldData === undefined) {
          return undefined;
        }
        return oldData.filter((photo) => photo.id !== updatedPhoto.id);
      });
    },
    [queryClient]
  );

  return { data, isLoading };
}
export default useLikedPhoto;
