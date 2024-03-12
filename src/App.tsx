import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { vars } from 'style/vars';
import Routes from 'pages/Routes';
import ErrorFallback from 'pages/ErrorFallback';
import ModalProvider from 'providers/ModalProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      retry: false,
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
      throwOnError: true,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ModalProvider>
            <Routes />
            <ReactQueryDevtools initialIsOpen={false} />
          </ModalProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

const globalStyles = css`
  ${emotionNormalize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: ${vars.color.default};
  }
  button {
    cursor: pointer;
    border: 1px solid transparent;
  }
  button:focus,
  :hover {
    outline: 0;
  }
`;
