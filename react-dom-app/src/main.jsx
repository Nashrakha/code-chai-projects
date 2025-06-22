import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider, // ✅ Correct import
} from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx'; 
import Github from './Components/Github/Github.jsx'; // ✅ Importing Github component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [ 
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
{
  path: 'contact',
  element: <Contact/>

},
{
  path: 'github',
  element: <Github/>

}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* ✅ Correct component */}
  </StrictMode>
);
