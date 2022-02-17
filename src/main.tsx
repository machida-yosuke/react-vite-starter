import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
