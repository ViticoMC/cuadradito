import { useGameStore } from '../store/game'
import { useDirection } from './useDirection'
import { useAudios } from '../store/audios'
import { backgroundMusic } from '../sound/sound';


export function useMoverCubo() {


  const { position, setPosition , stop , gameOver } = useGameStore()
  const {isBackgroundMusic , setIsBackgroundMusic} = useAudios()
  let direction = useDirection()

  const moverCubo = () => {
    
    if (stop || gameOver) {
      setPosition({ x: 0, y: 0 })
      return
    }

    if(!isBackgroundMusic ){
      console.log("reproduciendo musica") 
      backgroundMusic.play()
    }

    setIsBackgroundMusic(true)

    switch (direction) {
      case 'ArrowUp':
        setPosition({ x: position.x, y: position.y - 10 })
        break;
      case 'ArrowDown':
        setPosition({ x: position.x, y: position.y + 10 })
        break;
      case 'ArrowLeft':
        setPosition({ x: position.x - 10, y: position.y })

        break;
      case 'ArrowRight':
        setPosition({ x: position.x + 10, y: position.y })

        break;

    }
  }

  return moverCubo
}