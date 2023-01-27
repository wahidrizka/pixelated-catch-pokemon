import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Global } from '@emotion/react';
import { globalStyle } from "./emotion/global.style";
import { GlobalProvider } from "./libs/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Global styles={globalStyle} />
        <App />
    </GlobalProvider>
  </React.StrictMode>
);
  