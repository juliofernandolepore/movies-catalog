import { useState } from "react"


export const Counter = () => {
    const [estado, setEstado] = useState(0)

    const incremento = (numero:number):void=>{
        setEstado(estado + numero)
    }
  return (
    <div className='mt-5'>
        <h3>counter: use state</h3>
        <span>valor: {estado}</span>
        <hr />
        <button onClick={ ()=> incremento(1)} className="btn btn-outline-primary mt-2">
            incrementar en 1
        </button>
        <hr />
        <button onClick={ ()=>incremento(2) } className="btn btn-outline-primary mt-2">
            incrementar en 2
        </button>
        <hr />
        <button onClick={ ()=> setEstado(0) } className="btn btn-outline-primary mt-2">
            reset
        </button>
    </div>
  )
}
