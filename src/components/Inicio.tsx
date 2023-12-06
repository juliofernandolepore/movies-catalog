import imgCine from "./../images/ilustracion.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <div className="text-center">
        <h2>Busca tu pelicula y disfruta</h2>
        <hr />
        <Link to="/peliculas"><img src={imgCine} width="500px" alt="entradas para el cine" /></Link>
      </div>
    </>
  );
};
