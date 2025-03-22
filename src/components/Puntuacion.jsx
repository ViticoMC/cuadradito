
import { useGameStore } from '../store/game'

export function Puntuacion() {

    const {puntuacion} = useGameStore()
    return (
        <div className='w-[120px] h-[40px] flex flex-col items-center justify-center bg-gray-400 text-black shadow-2xl text-center rounded-sm '>
            <h1>Puntuacion : {puntuacion} </h1>
        </div>
    )
}