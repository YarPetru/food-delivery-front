import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: '40px' }}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <BrowserRouter basename="/">
            <App />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </IconContext.Provider>
  </React.StrictMode>
);
