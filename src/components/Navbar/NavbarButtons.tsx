import { css } from '@emotion/css';
import ButtonsBeforeLogin from './ButtonGroupsBeforeLogin';
import { Button } from 'components';
import { useUser } from 'hooks';

function NavbarButtons() {
  const user = useUser();

  return (
    <div
      aria-label="navbar-buttons"
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
      `}
    >
      {user ? (
        <ButtonsBeforeLogin />
      ) : (
        <Button size="small" variant="secondary">
          로그인
        </Button>
      )}
    </div>
  );
}
export default NavbarButtons;
