import { useState } from "react"

interface Usuario {
    uid: string;
    nombre: string;
}

const usuarioVacio: Usuario = {        
    uid: "vacio",
    nombre: "vacio"
}

export const Usuario = () => {
    
    const [usuario, setUsuario]= useState<Usuario>(usuarioVacio);
    const login = () =>{
        setUsuario({
            uid: "123ABC",
            nombre: "fernando lepore",

        });
    }

  return (
    <div className="mt-5">
        <h3>usuario: usestate</h3>
        <button 
        onClick={login}
        className="btn btn-outline-primary">
            login
        </button>
        {
            (usuario)
            ?<pre>{JSON.stringify(usuario)}</pre>
            :<pre>{JSON.stringify(usuario)}</pre>          
        }
        
    </div>
  )
}
