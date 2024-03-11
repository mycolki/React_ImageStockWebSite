import { css } from '@emotion/css';
import LogoTitle from './LogoTitle';
import NavbarButtons from './NavbarButtons';

function NavBar() {
  return (
    <nav
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 8px 36px;
      `}
    >
      <LogoTitle />
      <NavbarButtons />
    </nav>
  );
}
export default NavBar;
