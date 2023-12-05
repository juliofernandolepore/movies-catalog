import { useEffect, useState } from "react";
import jsonApi from "./apiSimulate.json";

function App() {
  
  interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    nacimiento: string;
  }

  const [listado, setListado] = useState<Persona[]>([]);
  
  useEffect( () => {    

    let gente :Persona[] = [
 
      {
        id: 1,
      nombre: "name",
      apellido: "lastname",
      nacimiento: "year",
      },
      {
        id: 2,
        nombre: "name",
        apellido: "lastname",
        nacimiento: "year",
        },
        {
          id: 3,
          nombre: "cosme",
          apellido: "fulanito",
          nacimiento: "1960",
          }

    ]
    setListado(gente);

  },[])

  return (
    <>
      <h1>React con Typescript</h1>
      <hr />
      <h2>desplegar listado de personas</h2>
      <hr />
      <ul className="list-group text-center">
        {listado.map(
          (p):JSX.Element=>(
          <li 
          className="list-group-item" key={p.id}>
          Nombre: {p.nombre} - 
          Apellido: {p.apellido} - 
          Fecha de Nacimiento: {p.nacimiento}
          </li>)
          )}
      </ul>
      <hr />
      <div className="text-center">
      {
        jsonApi.map((p) => <p key={p.id}><strong>{p.nombre} - {p.apellido}</strong></p>)
      }
      </div>
      <hr />
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-laber"></label>
        </div>
        </form>          
    </>
  )
}

export default App
