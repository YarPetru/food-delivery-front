import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: '40px' }}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>
);
