import { useSuspenseQuery } from '@tanstack/react-query';
import { css } from '@emotion/css';
import { getPhoto } from 'handlers/photo';
import { Image } from 'components';
import TagList from './TagList';
import Header from './Header';
import Description from './Description';
import { useUser } from 'hooks';
import { mockGetPhoto } from 'handlers/mock/mockHandlers';

function PhotoDetailModal({ photoId }: { photoId: string }) {
  const user = useUser();
  const { data: photo } = useSuspenseQuery({
    queryKey: ['photo', { photoId }],
    queryFn: () => getPhoto({ photoId, token: user?.access_token }),
    // queryFn: () => mockGetPhoto({ photoId }),
  });

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
