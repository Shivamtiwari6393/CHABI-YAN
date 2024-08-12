import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Components/Error';

import App from "./App"
const Home = lazy(() => import('./Components/Home'))
const AboutUs = lazy(() => import('./Components/AboutUs'))
const Projects = lazy(() => import('./Components/Projects'))
const Work = lazy(() => import('./Components/OurWork'))
const Team = lazy(() => import('./Components/Team'))
const PrivacyPolicy = lazy(() => import('./Components/PrivacyPolicy'))
const Disclaimer = lazy(() => import('./Components/Disclaimer'))
const GetInvolved = lazy(() => import('./Components/GetInvolved'))



const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/About-Us',
        element: <AboutUs></AboutUs>

      },
      {
        path: '/Projects',
        element: <Projects></Projects>

      },
      {
        path: '/Work',
        element: <Work></Work>
      },
      {
        path: '/Team',
        element: <Team></Team>

      },

      {
        path: '/Privacy-Policy',
        element: <PrivacyPolicy></PrivacyPolicy>

      },
      {
        path: '/Disclaimer',
        element: <Disclaimer></Disclaimer>
      },

      {
        path: '/Get-Involved',
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
