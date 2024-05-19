import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivacyPolicy from './Components/PrivacyPolicy';
import Home from './Components/Home';
import Error from './Components/Error';
import Disclaimer from './Components/Disclaimer';
import GetInvolved from './Components/GetInvolved';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },

      {
        path: '/privacy-policy',
        element: <PrivacyPolicy></PrivacyPolicy>

      },
      {
        path: '/disclaimer',
        element: <Disclaimer></Disclaimer>
      },

      {
        path: '/getinvolved',
        element: <GetInvolved></GetInvolved>
      }
    ],
  },


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route} ></RouterProvider>
);


reportWebVitals();
