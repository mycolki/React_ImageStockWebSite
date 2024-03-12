import { css } from '@emotion/css';
import { LikeButton } from 'components';
import { useUser } from 'hooks';
import { vars } from 'style/vars';

interface HeaderProps {
  id: string;
  username: string;
  liked: boolean;
}

function Header({ id, username, liked }: HeaderProps) {
  const user = useUser();

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

      {user && (
        <LikeButton photoId={id} likedByUser={liked} variant="outline" />
      )}
    </header>
  );
}
export default Header;
