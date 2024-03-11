import { css } from '@emotion/css';
import ButtonsBeforeLogin from './ButtonGroupsBeforeLogin';
import { Button } from 'components';

function NavbarButtons() {
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
      {/* TODO: isLoggedUser */}
      {true ? (
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
