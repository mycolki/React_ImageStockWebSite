import { css } from '@emotion/css';
import { Oval } from 'react-loader-spinner';
import { vars } from 'style/vars';

function Spinner() {
  return (
    <div
      className={css`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      `}
    >
      <Oval
        visible
        height="50"
        width="50"
        color={vars.color.blue900}
        ariaLabel="oval-loading"
        strokeWidth="8"
        secondaryColor={vars.color.blue200}
      />
    </div>
  );
}
export default Spinner;
