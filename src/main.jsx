import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
