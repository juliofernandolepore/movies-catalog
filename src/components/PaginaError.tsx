import { useRouteError } from "react-router-dom";

export const PaginaError = () => {

  const error: any = useRouteError();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3 text-center">Ocurrio un error</h1>
          <hr />
          <p className="text-center">Ocurrio un error inesperado</p>
          <p className="text-center">
            <em>{error.status}</em>
            <hr />
          </p>
        </div>
      </div>
    </div>
  );
};
