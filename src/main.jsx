import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>
        
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
