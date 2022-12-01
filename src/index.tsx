import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import NewGroupPage from './pages/NewGroupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogInPage from './pages/LogInPage';
import GroupsPage from './pages/GroupsPage';

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/log-in',
    element: <LogInPage />,
  },
  {
    path: '/groups',
    element: <GroupsPage />,
  },
  {
    path: '/groups/new',
    element: <NewGroupPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-left" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
