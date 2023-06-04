import Layout from 'components/layout/Layout';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
// import { Layout } from 'components/layout';

const ShopsPage = lazy(() => import('./pages/ShopsPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage'));

const App: React.FC = () => {
  return (
    <>
      <Suspense
        fallback={
          <BeatLoader
            className="text-blue-main"
            cssOverride={{ textAlign: 'center', marginTop: '64px' }}
            size="16px"
            margin="8px"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ShopsPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          </Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
