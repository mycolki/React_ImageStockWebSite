import { css } from '@emotion/css';
import { LikeButton } from 'components';
import { vars } from 'style/vars';

interface PhotoDetailProps {
  id: string;
  username: string;
  liked: boolean;
}

function PhotoTitle({ id, username, liked }: PhotoDetailProps) {
  return (
    <header
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 12px 24px;
      `}
    >
      <span
        className={css`
          font-size: ${vars.fontSize.xxl};
          font-weight: ${vars.fontWeight['800']};
        `}
      >
        {username}
      </span>

      {/* TODO: isLoggedUser */}
      {true && (
        <LikeButton
          photoId={id}
          likedByUser={liked}
          variant="outline"
          onLikeChange={() => {}}
        />
      )}
    </header>
  );
}
export default PhotoTitle;
