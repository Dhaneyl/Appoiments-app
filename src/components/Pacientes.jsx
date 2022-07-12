import React from 'react'

export const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
const {nombre, propietario, email, fecha, sintomas, id} = paciente;

const handleEliminar = () => {
  const respuesta = confirm('Deseas eliminar este paciente?');

  if(respuesta) {
      eliminarPaciente(id)
  }
}

  return <>
    <div className='mx-5 my-10 bg-white shadow-md py-10 px-5 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700'>
      Nombre: {''}
      <span className='font-normal normal-case' >
        {nombre}
      </span>
    </p>
    <p className='font-bold mb-3 text-gray-700'>
      Propietario: {''}
      <span className='font-normal normal-case' >
        {propietario}
      </span>
    </p>
    <p className='font-bold mb-3 text-gray-700'>
      Email: {''}
      <span className='font-normal normal-case' >
       {email}
      </span>
    </p>
    <p className='font-bold mb-3 text-gray-700'>
      Fecha Alta: {''}
      <span className='font-normal normal-case' >
        {fecha}
      </span>
    </p>
    <p className='font-bold mb-3 text-gray-700'>
      Sintomas: {''}
      <span className='font-normal normal-case' >
        {sintomas}
      </span>
    </p>
   {/* Botones  */}
   <div className='flex justify-between mt-10'>
   <button
   type='buttom'
   className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
   onClick={()=>setPaciente(paciente)}
   >Editar</button>

   <button
   type='buttom'
   className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
   onClick={ handleEliminar}
   >Eliminar</button>
   

   </div>


  </div>
  </>
}
