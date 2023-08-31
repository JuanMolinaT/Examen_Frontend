import React from 'react'

const ListaActividades = ({eliminarActividad, actividadR}) => {

    const { _id, calificacion, descripcion, nombreActividad, nombreMateria, unidad, fecha }=actividadR;
    const handleEliminarActividad = (actividadId) => {
        const respuesta = confirm('Deseas eliminar este registro? Actualice la página para ver los cambios')
        if (respuesta) {
            eliminarActividad(actividadId)
        }
    };
    return (
        <div className="bg-gray-100  flex flex-wrap justify-center items-center">
            <div className="">
                <table className="w-full shadow table-fixed">
                    <thead>
                        <tr>
                            <th className=" py-1 bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Asignatura
                            </th>
                            <th className=" bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Unidad
                            </th>
                            <th className=" bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Nombre de la Actividad
                            </th>
                            <th className=" bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Descripción
                            </th>
                            <th className=" bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Fecha de entrega
                            </th>
                            <th className=" bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Calificación
                            </th>
                            <th className=" bg-gray-800 text-white font-semibold uppercase text-sm text-center">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    {/* Campos de la Tabla */}
                    <tbody>
                        <tr>
                            <td className="px-4 py-4  text-center">{nombreMateria}</td>
                            <td className="px-4 py-4  text-center">{unidad}</td>
                            <td className="px-4 py-4  text-center">{nombreActividad}</td>
                            <td className="px-4 py-4  text-center">{descripcion}</td>
                            <td className="px-4 py-4  text-center">{fecha?.split('T')[0]}</td>
                            <td className="px-4 py-4  text-center">{calificacion}</td>
                            <td className="px-4 py-4  text-center">
                                {/* <div className=' grid grid-rows-2'> */}
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleEliminarActividad(_id)} // Pasa el ID de la actividad a eliminar
                                >
                                    Eliminar
                                </button>
                                {/* <button
                                    className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-1 rounded"
                                    onClick={() => handleEliminarActividad(1)} // Pasa el ID de la actividad a eliminar
                                >
                                    Editar
                                </button> */}
                                {/* </div> */}
                                
                            </td>

                        </tr>
                        {/* Insertar mas filas: */}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaActividades
