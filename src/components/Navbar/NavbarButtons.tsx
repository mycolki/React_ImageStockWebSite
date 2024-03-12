import { css } from '@emotion/css';
import ButtonsAfterLogin from './ButtonGroupsBeforeLogin';
import { Button } from 'components';
import { login } from 'handlers/auth';
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
      {true ? (
        <ButtonsAfterLogin />
      ) : (
        <Button size="small" variant="secondary" onClick={() => login()}>
          로그인
        </Button>
      )}
    </div>
  );
}
export default NavbarButtons;
