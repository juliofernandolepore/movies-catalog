import { useEffect, useState } from "react"


export const Timer = () => {
  const [segundos, setSegundos] = useState();

  return (
    <>
    <h4>Timer <small>{segundos}</small></h4>
    </>
  )
}
