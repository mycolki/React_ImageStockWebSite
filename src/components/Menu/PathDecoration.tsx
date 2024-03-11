import { css } from '@emotion/css';
import { vars } from 'style/vars';

function PathDecoration() {
  return (
    <div
      className={css`
        height: 2px;
        background-color: ${vars.color.default};
      `}
    ></div>
  );
}
export default PathDecoration;
