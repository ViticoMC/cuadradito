
import { useGameStore } from "../store/game"
import { useObstaculos } from "../store/obstaculos"
import { fondos } from "../const/fondos"
import { useAudios } from "../store/audios"



export function ModalLoser() {

    const { gameOver, setGameOver, puntuacion, mayorPuntuacion, setMayorPuntuacion, setStop , setPosition , setPuntuacion , setFondoURL , setOrientacion } = useGameStore()
    const { setObstaculosPosition } = useObstaculos()
    const fondNumber = Math.floor(Math.random() * fondos.length);
    const {setIsBackgroundMusic } = useAudios()


  const imgUrl = fondos[fondNumber]


    if (puntuacion > mayorPuntuacion) {
        setMayorPuntuacion(puntuacion)
    }

    function handleClick() {

        setObstaculosPosition({ x: 0, y: 0 }, true)
        setPosition({ x: 0, y: 0 })
        setPuntuacion(true)
        setGameOver(false)
        setStop(true)
        setFondoURL(imgUrl)
        setIsBackgroundMusic(false)
        setOrientacion('')

    }

    return (
        <div className={`${gameOver ? 'opacity-100 z-50' : 'opacity-0 -z-40'} transition-all duration-300 ease-in-out 
        w-[160px] h-[140px] backdrop-blur-sm text-white text-center rounded-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        flex flex-col items-center justify-center text-sm`}>
            <h3>Game Over</h3>
            <p>Mayor puntuación: {mayorPuntuacion}</p>
            <button className='bg-blue-500 text-white rounded-sm h-8 w-16 mt-4 cursor-pointer' onClick={(handleClick)}>Reiniciar</button>
        </div>
    )
}