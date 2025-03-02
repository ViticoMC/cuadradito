
import { useGameStore } from "../store/game"

export function ModalLoser() {

    const {gameOver , setGameOver , puntuacion , mayorPuntuacion , setMayorPuntuacion , setStop , stop  } = useGameStore()
    

        if(puntuacion > mayorPuntuacion){
            setMayorPuntuacion(puntuacion)
        }
       
       function handleClick() {
            setGameOver(false)
            setStop(true)

        }

    return (
        <div className={`${gameOver ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out 
        w-[280px] h-[200px] bg-red-500 text-white text-center rounded-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        flex flex-col items-center justify-center`}>
            <h1>Game Over</h1>
            <h2>Mayor puntuación: {mayorPuntuacion}</h2>
            <button className='bg-blue-500 text-white rounded-sm px-4 py-2 mt-4' onClick={(handleClick)}>Reiniciar</button>
        </div>
    )
}