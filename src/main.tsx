import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserProfile, { userLoader } from './pages/UserProfile';

import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/user',
    element: <UserProfile />,
    loader: userLoader, 
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
