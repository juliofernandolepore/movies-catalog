import { Inicio } from "./components/Inicio";

export const App = () => {
  return (
    <div className="contaniner">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Catalogo de Peliculas</h1>
        </div>
        <div className="col text-end">
          <a href="#!">
            <span className="badge bg-success">Login</span>
          </a>
        </div>
        <hr className="mb-3"/>
      </div>
      <div className="row">
        <div className="col-md-2">
            <nav>
                <div className="list-group">
                    <a href="#!" className="list-group-item list-group-action text-center">Inicio</a>
                    <a href="#!" className="list-group-item list-group-action text-center">Peliculas</a>
                    <a href="#!" className="list-group-item list-group-action text-center">Generos</a>
                    <a href="#!" className="list-group-item list-group-action text-center bg-danger text-white">Administrador del Catalogo Peliculas</a>
                    <a href="#!" className="list-group-item list-group-action text-center bg-warning">Agregar Pelicula</a>
                    <a href="#!" className="list-group-item list-group-action text-center bg-warning">Probando funcionalidad GraphQL</a>
                </div>
            </nav>
        </div>
        <div className="col-md-10">
            <Inicio/>
        </div>  
      </div>
    </div>
  );
};
