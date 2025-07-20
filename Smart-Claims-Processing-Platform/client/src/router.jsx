import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClaimForm from './pages/ClaimForm';
import ClaimDetails from './pages/ClaimDetails';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/submit',
    element: <ClaimForm />,
  },
  {
    path: '/claim/:id',
    element: <ClaimDetails />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
