import { useStoreZustand } from "../Zustand"


export const PacienteList = () => {
  
  
    const { count, inc } = useStoreZustand()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
