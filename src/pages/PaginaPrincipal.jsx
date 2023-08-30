import { useEffect, useState } from 'react';
import axios from 'axios';
import ListaActividades from '../components/ListaActividades';
import FormularioActividad from '../components/FormularioActividad';
const PaginaPrincipal = () => {

    const [ actividades, setActividades ] = useState([]);
    const eliminarActividad = async (id) =>{
        try {
            const {data} = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/tareas/${id}`)

        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        const consultarActividades = async ()=>{
            try {
                const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tareas/`)
                setActividades(data);
            } catch (error) {
                console.log(error)
            }
        }
        consultarActividades()
    },[])

    

    return (
        <div>
            <div>
                <FormularioActividad />
            </div>
            <div className=' '>
                {actividades ? actividades.map((actividadR) => (<ListaActividades 
                key={actividadR._id} 
                actividadR={actividadR} 
                eliminarActividad = {eliminarActividad} />)) : <h1>No existen datos</h1>}
            </div>
        </div>
    )
}
export default PaginaPrincipal