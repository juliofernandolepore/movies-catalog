import imgCine from "./../images/ilustracion.jpg";

export const Inicio = () => {
  return (
    <>
      <div className="text-center">
        <h2>Busca tu pelicula y disfruta</h2>
        <hr />
        <img src={imgCine} width="500px" alt="entradas para el cine" />
      </div>
    </>
  );
};
