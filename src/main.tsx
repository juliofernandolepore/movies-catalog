import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PaginaError } from "./components/PaginaError";
import { Inicio } from "./components/Inicio";
import { Peliculas } from "./components/Peliculas";
import { Generos } from "./components/Generos";
import { Login } from "./components/Login";
import { AgregarPeli } from "./components/AgregarPeli";
import { Graphql } from "./components/Graphql";
import { AdministrarCatalogo } from "./components/AdministrarCatalogo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaError />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "/peliculas", element: <Peliculas /> },
      { path: "/generos", element: <Generos/> },
      { path: "/login", element: <Login/> },
      { path: "/agregar/peli/0", element: <AgregarPeli/> },
      { path: "/graphql", element: <Graphql/> },
      { path: "/admin", element: <AdministrarCatalogo/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
