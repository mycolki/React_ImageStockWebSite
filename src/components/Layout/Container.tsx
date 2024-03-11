import { Outlet } from 'react-router-dom';
import { css } from '@emotion/css';
import NavBar from 'components/Navbar';

function Container() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        min-width: 100vw;
        min-height: 100vh;
        margin: 0;
      `}
    >
      <NavBar />
      <Outlet />
    </div>
  );
}
export default Container;
