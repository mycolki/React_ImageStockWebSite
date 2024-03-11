import { css } from '@emotion/css';
import { isAxiosError } from 'axios';
import { Button } from 'components/Button';
import ERROR from 'handlers/errorMessages';
import { vars } from 'style/vars';

function ErrorFallback({ error }: { error: Error }) {
  let message = '서버에러가 발생했습니다.';
  let status: number | undefined;

  if (error instanceof Error) {
    if (
      error.message === ERROR.UNAUTHENTICATED_TOKEN ||
      error.message === ERROR.UNAUTHENTICATED_USER
    ) {
      message = '로그인이 필요한 페이지입니다.';
    }
  }

  if (isAxiosError(error)) {
    status = error.status;
  }

  return (
    <div role="alert" className={errorPageStyle}>
      <header className={errorPageHeaderStyle}>
        <h1>ERROR {status}</h1>
        <p>{message}</p>
      </header>

      <main
        className={css`
          display: flex;
          justify-content: center;
          padding: 150px 24px 24px 24px;
        `}
      >
        <Button
          onClick={() => {
            window.location.href = '/';
          }}
        >
          홈으로
        </Button>
      </main>
    </div>
  );
}
export default ErrorFallback;

const errorPageStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${vars.color.blue100}90;
`;

const errorPageHeaderStyle = css`
  padding: 24px;
  text-align: center;

  h1 {
    font-size: ${vars.fontSize.pageTitle};
    font-weight: ${vars.fontWeight[800]};
  }
  p {
    font-size: ${vars.fontSize.xl};
  }
`;
