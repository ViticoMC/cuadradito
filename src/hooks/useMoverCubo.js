
import { useContext } from 'react'
import { PositionContext } from '../context/positionContext'
import { useDirection } from './useDirection'
import { useRespawnBolita } from './useRespawnBolita'
import { maximos } from '../services/maximos'


export function useMoverCubo() {


  const { position, setPosition } = useContext(PositionContext)
  const direction = useDirection()
  const { MaxX, MaxY } = maximos()

  useRespawnBolita()
 
   


  const   moverCubo = () => {
    switch (direction) {
      case 'ArrowUp':
        setPosition({ x: position.x, y: position.y - 1 < 0 ? position.y : position.y - 1 })
        console.log(position)

        break;
      case 'ArrowDown':
        setPosition({ x: position.x, y: position.y + 1 > MaxY ? position.y : position.y + 1 })
        console.log(position)

        break;
      case 'ArrowLeft':
        setPosition({ x: position.x - 1 < 0 ? position.x : position.x - 1, y: position.y })
        console.log(position)
        break;
      case 'ArrowRight':
        setPosition({ x: position.x + 1 > MaxX ? position.x : position.x + 1, y: position.y })
        console.log(position)
        break;
    }
  }

  return moverCubo
}