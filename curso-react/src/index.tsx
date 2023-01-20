import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // 8  a aplicaçâo roda dento de uma div root
);
root.render( // 8 render faz a aplicação carregar
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
