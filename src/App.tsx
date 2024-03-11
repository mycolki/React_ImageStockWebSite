import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import Routes from 'pages/Routes';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Routes />
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
`;
