import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="contaniner">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Catalogo de Peliculas</h1>
        </div>
        <div className="col text-end">
          <Link to="/login">
            <span className="badge bg-success">Login</span>
          </Link>
        </div>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link
                to="/"
                className="list-group-item list-group-action text-center"
              >
                Inicio
              </Link>
              <Link
                to="/peliculas"
                className="list-group-item list-group-action text-center"
              >
                Peliculas
              </Link>
              <Link
                to="/generos"
                className="list-group-item list-group-action text-center"
              >
                Generos
              </Link>
              <Link
                to="/admin"
                className="list-group-item list-group-action text-center bg-danger text-white"
              >
                Administrador del Catalogo Peliculas
              </Link>
              <Link
                to="/agregar/peli/0"
                className="list-group-item list-group-action text-center bg-warning"
              >
                Agregar Pelicula
              </Link>
              <Link
                to="/graphql"
                className="list-group-item list-group-action text-center bg-warning"
              >
                Probando funcionalidad GraphQL
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
