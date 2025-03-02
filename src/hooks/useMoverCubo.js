import { useGameStore } from '../store/game'
import { useDirection } from './useDirection'


export function useMoverCubo() {


  const { position, setPosition , stop } = useGameStore()
  let direction = useDirection()

    

  const moverCubo = () => {
    

    if (stop) {
      setPosition({ x: 0, y: 0 })
      return
    }



    switch (direction) {
      case 'ArrowUp':
        setPosition({ x: position.x, y: position.y - 1 })
        break;
      case 'ArrowDown':
        setPosition({ x: position.x, y: position.y + 1 })
        break;
      case 'ArrowLeft':
        setPosition({ x: position.x - 1, y: position.y })

        break;
      case 'ArrowRight':
        setPosition({ x: position.x + 1, y: position.y })

        break;

    }
  }

  return moverCubo
}