import { useState } from 'react'
import { PacienteList } from './components/PacienteList'
import PatientForm from './components/FomsPacientes'
import { Header } from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='flex flex-col mx-auto'>
  <Header/>
  <div className='flex flex-row mx-auto w-full gap-2'>
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      
    <PatientForm />
    </div>
    <div className='w-1/2 '>
    <PacienteList/>

    </div>
  </div>
  </div>       
    </>
  )
}

export default App
