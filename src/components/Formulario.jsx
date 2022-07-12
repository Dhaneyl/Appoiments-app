import React, { useState, useEffect } from 'react'
import {Error} from './Error';

 

export const Formulario = ({pacientes, setPacientes, paciente}) => {
   const [nombre, setNombre] = useState('')
   const [propietario, setPropietario] = useState('')
   const [email, setEmail] = useState('')
   const [fecha, setFecha] = useState('')
   const [sintomas, setSintomas] = useState('')
   const [error, setError] = useState(false)
//   Completar el formulario
   useEffect(() => {
    if(Object.keys(paciente).length > 0){ //confirmar si un objeto tiene algun valor
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    }
   }, [paciente])
   
   const idGenerated = ()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
   }
  
   const handleSubmit = (e)=>{
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes('')){
        setError(true); 
        return;
    } 
    setError(false);
    //Objeto de pacientes
    const objPacientes ={
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
         
    }

    //Editando y agregando nuevo paciente
     if(paciente.id){
        //editando
        objPacientes.id = paciente.id
        const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === 
            paciente.id ? objPacientes : pacienteState)

            setPacientes(pacientesActualizado)
            setPacientes({})

     } else{
        //Nuevo registro
        objPacientes.id = idGenerated();
        setPacientes([...pacientes, objPacientes]); //Nos permite tener un array de pacientes

     } idGenerated()
    
    
    //reset 

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
   }
    
  return (
    <>
        <div className='md:w-1/2 lg:w-2/5'>
          <h2 className='font-black text-3xl text-center'>Seguimiento de los pacientes</h2>

          <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''}
          <span className='text-indigo-600 font-bold '>Administralos</span></p>

          <form 
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
          
          {/* Error message */}
          {error && <Error mensaje='Todos los campos son obligatorios'/>}
            <div className='mb-5'>
                <label htmlFor="mascota" className='block text-gray-800 font-bold'>
                Nombre Mascota
                </label>
                <input 
                    id='mascota'
                    type='texto'
                    placeholder='Nombre de tu mascota'
                    className='bolder-2 w-full p-2 mt-2 rounded-md '
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="propietario" className='block text-gray-800 font-bold'>
                Nombre Propietario
                </label>
                <input 
                    id='propietario'
                    type='texto'
                    placeholder='Nombre del propietario'
                    className='bolder-2 w-full p-2 mt-2 rounded-md '
                    value={propietario}
                    onChange={(e)=> setPropietario(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='block text-gray-800 font-bold'>
                Correo electronico
                </label>
                <input 
                    id='email'
                    type='email'
                    placeholder='Emial del propietario'
                    className='bolder-2 w-full p-2 mt-2 rounded-md '
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="alta" className='block text-gray-800 font-bold'>
                Dado de alta
                </label>
                <input 
                    id='alta'
                    type='date'
                    className='bolder-2 w-full p-2 mt-2 rounded-md '
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor="sintomas" className='block text-gray-800 font-bold'>
               Sintomas
                </label>
                <textarea
                    id="sintomas"
                    className='bolder-2 w-full p-2 mt-2 rounded-md '
                    placeholder='Describe los sintomas'
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)}
                />
            </div>
            <input
            type="submit"
            className='bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700'
            value={paciente.id ? 'Agregar cambios' : 'Agregar paciente'}
            />
          </form>
        </div>
    </>
  )
}

