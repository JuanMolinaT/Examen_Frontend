import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import ListaActividades from '../components/ListaActividades';
const FormularioActividad = () => {
    axios.defaults.baseURL = `${import.meta.env.VITE_BACKEND_URL}/api/tareas`;

    const [actividades, setActividades] = useState([]);

    const [nombreActividad, setNombreActividad] = useState('');
    const [nombreMateria, setNombreMateria] = useState('');
    const [unidad, setunidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [fecha, setFecha] = useState('');

    const MATERIAS = ['Diseño de Desarrollo Web', 'Minería de Datos', 'Enrutamiento', 'Ingeniería de Software']

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([nombreMateria, unidad, descripcion, calificacion, fecha].includes('')) { //si las siguientes variables incluyen string vacios 
            alert('Complete todos los campos')
            return
        }
        try {
             const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/tareas/`, { nombreMateria, unidad, descripcion, calificacion, fecha, nombreActividad })
            alert('Datos Guardados Correctamente, ¡ Actualice la página para ver los cambios !')
        } catch (error) {
            alert('Error al guardar el registro, verifique el codigo del ingreso')
        }

        setCalificacion('');
        setNombreMateria('');
        setNombreActividad('');
        setunidad('');
        setDescripcion('');
    }
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4  text-center">Actividades por Asignatura</h1>
            <form
                className=' bg-white shadow-lg  border-3  px-10 py-2 border-gray-100'
                onSubmit={handleSubmit}
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <div className='my-2'>
                        <label
                            className=' font-medium block uppercase'
                            htmlFor='materia'
                        >
                            Asignatura
                        </label>
                        <select
                            id='materia'
                            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
                            value={nombreMateria}
                            onChange={e => setNombreMateria(e.target.value)}
                        >
                            <option value="">-- Selecciona la asignatura --</option>
                            {MATERIAS.map(opcion => (
                                <option key={opcion}>{opcion}</option>
                            ))}

                        </select>
                    </div>
                    <div className='my-2'>
                        <label className=" font-medium block uppercase" htmlFor='concepto'>Nombre de la Actividad</label>
                        <input
                            type="text"
                            id='concepto'
                            className=" bg-transparent w-full p-2 border-2 border-gray-100 rounded-lg"
                            placeholder="Ingrese el nombre de la actividad"
                            value={nombreActividad}
                            onChange={e => setNombreActividad(e.target.value)}
                        />
                    </div>
                    <div className='my-2'>
                        <label className=" font-medium block uppercase" htmlFor='valor'>Unidad</label>
                        <input
                            type="text"
                            id='monto'
                            className=" bg-transparent w-full p-2 border-2 border-gray-100 rounded-lg"
                            placeholder="Número de unidad"
                            value={unidad}
                            onChange={e => setunidad(e.target.value)}
                        />
                    </div>
                    <div className='my-2'>
                        <label className=" font-medium block uppercase" htmlFor='valor'>Calificación</label>
                        <input
                            type="text"
                            id='ingreso-id'
                            className=" bg-transparent w-full p-2 border-2 border-gray-100 rounded-lg"
                            placeholder="Ingrese la Calificación /20"
                            value={calificacion}
                            onChange={e => setCalificacion(e.target.value)}
                        />
                    </div>
                    <div className='my-2'>
                        <label className=" font-medium block uppercase" htmlFor='nombre'>Fecha de Entrega</label>
                        <input
                            type="date"
                            id='nombre'
                            className=" bg-transparent w-full p-2 border-2 border-gray-100 rounded-lg"
                            placeholder="Ingrese su nombre"
                            onChange={ e => setFecha(e.target.value)}

                        />
                    </div>
                    <div className='my-2'>
                        <label className=" font-medium block uppercase" htmlFor='decripcion'>Descripción</label>
                        <textarea
                            id="decripcion"
                            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                            placeholder="Descripción del la actividad"
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value)}
                        />
                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-2 border-t-2'>
                    <div className=''>
                        <input className=" uppercase text-center p-2 mt-3 bg-lime-600 rounded w-full font-bold text-white
                           hover:bg-lime-700 transition-colors"
                            type='submit'
                            value='Guardar'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioActividad
