import { useContext } from 'react'
import { PuntuacionContext } from '../context/puntuacionContext'

export function Puntuacion() {

    const {puntuacion} = useContext(PuntuacionContext)
    return (
        <div className='w-[140px] h-[60px] flex flex-col items-center justify-center bg-red-500 text-white text-center rounded-sm absolute top-[680px]  left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h1>Puntuacion : {puntuacion} </h1>
        </div>
    )
}