import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { css } from '@emotion/css';
import { getPhoto } from 'handlers/photo';
import { Image } from 'components';
import TagList from './TagList';
import Header from './Header';
import Description from './Description';
import { useSetLikeCallback, useUser } from 'hooks';
import { GetPhoto, GetPhotoDetail } from 'types/photo';
import { useCallback } from 'react';

function PhotoDetailModal({ photoId }: { photoId: string }) {
  const user = useUser();
  const queryClient = useQueryClient();
  const setLikeChangeCallback = useSetLikeCallback();

  const { data: photo } = useSuspenseQuery({
    queryKey: ['photo', { photoId }],
    queryFn: () => {
      const response = getPhoto({ photoId, token: user?.access_token });
      setLikeChangeCallback(() => handleLikeChange);
      return response;
    },
  });

  const handleLikeChange = useCallback(
    (updatedPhoto: GetPhoto) => {
      queryClient.setQueryData<GetPhotoDetail>(
        ['photo', { photoId: updatedPhoto.id }],
        (oldData) => {
          if (oldData === undefined) {
            return undefined;
          }
          return { ...oldData, liked_by_user: updatedPhoto.liked_by_user };
        }
      );
    },
    [queryClient]
  );

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >
      <Header
        id={photo.id}
        username={photo.user.name}
        liked={photo.liked_by_user}
      />

      <div
        aria-label="photo-wrapper"
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 12px 24px;
        `}
      >
        <Image width="400px" height="400px" src={photo.urls.small} />
      </div>

      <Description
        width={photo.width}
        height={photo.height}
        updated_at={photo.updated_at}
        downloads={photo.downloads}
      />

      <TagList tags={photo.tags} />
    </div>
  );
}
export default PhotoDetailModal;
