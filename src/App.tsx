import { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { countState } from '~/atoms/countState';

function App() {
  const app = css`
    text-align: center;
  `;

  const AppLogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

  const AppLogo = css`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${AppLogoSpin} infinite 20s linear;
    }
  `;

  const AppHeader = css`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const AppLink = css`
    color: #61dafb;
  `;

  const button = css`
    font-size: calc(10px + 2vmin);
  `;

  const [count, setCount] = useRecoilState(countState);

  return (
    <div css={app}>
      <header css={AppHeader}>
        <img src="./images/logo.svg" css={AppLogo} alt="logo" />
        <p>
          Hello Vite + React + eslint +<br /> prettier + emotion + recoil
        </p>
        <p>
          <button
            type="button"
            css={button}
            onClick={() => setCount(() => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            css={AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            css={AppLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
