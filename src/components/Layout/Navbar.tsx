import { css } from '@emotion/css';
import { Button, Logo, StyledLink, Unlike } from 'components';
import { vars } from 'style/vars';

function NavBar() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 8px 36px;
      `}
    >
      <div
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
      </div>

      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        `}
      >
        {/* TODO: isLoggedUser */}
        {true ? (
          <>
            <Button size="small" variant="secondary">
              사진 제출
            </Button>
            <StyledLink
              to="/user/like"
              size="small"
              variant="outline"
              rightSlot={<Unlike size={18} />}
            >
              북마크
            </StyledLink>
            <span
              className={css`
                font-size: ${vars.fontSize.xs};
                font-weight: ${vars.fontWeight[500]};
              `}
            >
              myColki
            </span>
          </>
        ) : (
          <Button size="small" variant="secondary">
            로그인
          </Button>
        )}
      </div>
    </div>
  );
}
export default NavBar;
