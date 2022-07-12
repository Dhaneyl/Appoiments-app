import { useState, useEffect } from 'react'
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { LispadoPacientes } from './components/LispadoPacientes';



function App() {
const [pacientes, setPacientes] = useState([])
const [paciente, setPaciente] = useState({})

//Obtendra lo que se encuentre en localStorage
useEffect(() => {
  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  setPacientes(pacientesLS);
}
  obtenerLS();
}, [])


useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes));
  
}, [pacientes]) //se pone paciente porque es la variable que guarda la informacion dada
//la funcion setPacientes.


let eliminarPaciente = id => {
  const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
  setPacientes(pacientesActualizados);

}

  return <>
  <div className='container mx-auto mt-20'>
    <Header  />
    <div className='mt-12 md:flex'>
    <Formulario 
    pacientes={pacientes}
    setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
    />
    <LispadoPacientes
    pacientes={pacientes} 
    setPaciente={setPaciente} 
    eliminarPaciente = {eliminarPaciente}



    />
    
    </div>
    </div>
  </>
}

export default App
