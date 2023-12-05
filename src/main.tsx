import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PaginaError } from './components/PaginaError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PaginaError/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
