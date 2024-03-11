import { css } from '@emotion/css';
import { Logo, StyledLink } from 'components';
import { vars } from 'style/vars';

function LogoTitle() {
  return (
    <header
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <StyledLink to="/" variant="ghost" style={{ paddingLeft: '0' }}>
        <Logo />
      </StyledLink>

      <h1
        className={css`
          font-weight: ${vars.fontWeight['800']};
          font-size: ${vars.fontSize.titleMd};
          margin: 0;
        `}
      >
        UnderTheSea
      </h1>
    </header>
  );
}
export default LogoTitle;
