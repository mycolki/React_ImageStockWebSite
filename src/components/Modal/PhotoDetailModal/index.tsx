import { useSuspenseQuery } from '@tanstack/react-query';
import { css } from '@emotion/css';
import { getPhoto } from 'handlers/photo';
import { Image } from 'components';
import { vars } from 'style/vars';
import TagList from './TagList';
import PhotoTitle from './PhotoTitle';
import Description from './Description';

function PhotoDetailModal({ photoId }: { photoId: string }) {
  const user = { access_token: '' };
  const { data: photo } = useSuspenseQuery({
    queryKey: ['photo', { photoId }],
    queryFn: () => getPhoto({ photoId, token: user?.access_token }),
  });

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >
      <PhotoTitle
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

const columnStyle = css`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  padding: 12px 24px;
  gap: 60px;
  white-space: nowrap;
  font-size: ${vars.fontSize.md};

  .column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50px;
    .label {
      font-weight: ${vars.fontWeight[800]};
    }
  }
`;
