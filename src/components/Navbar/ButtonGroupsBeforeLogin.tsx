import { css } from '@emotion/css';
import { Button, StyledLink, Unlike } from 'components';
import { vars } from 'style/vars';

function ButtonsAfterLogin() {
  return (
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
  );
}
export default ButtonsAfterLogin;
