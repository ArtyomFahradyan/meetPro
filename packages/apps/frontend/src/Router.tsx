import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spinner } from '@meet/ui';
import Layout from 'components/Layout';
import Navigation from 'components/Navigation';

const Assistant = lazy(() => import('pages/Assistant'));
const Customize = lazy(() => import('pages/Customize'));
const Account = lazy(() => import('pages/Account'));
const Verification = lazy(() => import('pages/Verification'));
const Success = lazy(() => import('pages/Success'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/*"
            element={
              <Layout sidebar={<Navigation />}>
                <Suspense fallback={<Spinner />}>
                  <Routes>
                    <Route path="/" element={<Assistant />} />
                    <Route path="customize" element={<Customize />} />
                    <Route path="account/*" element={<Account />} />
                  </Routes>
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/verify/*"
            element={
              <Layout>
                <Suspense fallback={<Spinner />}>
                  <Routes>
                    <Route path="/" element={<Verification />} />
                    <Route path="success" element={<Success />} />
                  </Routes>
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
