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
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import Team from './Components/Team';
import Work from './Components/Swork';


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
