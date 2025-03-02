
import '../index.css'
import { useGameStore } from '../store/game'
import { useBolitaStore } from '../store/bolita'
import { useMoverCubo } from '../hooks/useMoverCubo'
import { numeroAleatorioEntero } from '../services/aleatoriPosition'
import { useEffect } from 'react'
import { maximos } from "../services/maximos"


export function Cuadradito() {

  const { position , puntuacion, setPuntuacion, setGameOver , setStop  , stop , setPosition } = useGameStore()
  const { positionBolita, setPositionBolita } = useBolitaStore()
  const moverCubo = useMoverCubo()
  const { positionX, positionY } = numeroAleatorioEntero()
  const { MaxX, MaxY } = maximos()


  const isInX = position.x === positionBolita.x || position.x + 1 === positionBolita.x
  const isInY = position.y === positionBolita.y || position.y + 1 === positionBolita.y

  if (isInX && isInY) {
    setPositionBolita({ x: positionX, y: positionY })
    setPuntuacion()
  }

    if ((position.x === MaxX+1 || position.y+1 === MaxY+1 || position.x === -1 || position.y === -1) && !stop) {
      setPosition({x:0 , y :0})
      setPuntuacion(true)
      setGameOver(true)
      setStop(true)
 }
      


  let vel = 100 - 10 * (puntuacion / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!stop){
      moverCubo()
      }
    }, vel);
    return () => clearInterval(interval);

  }, [position, moverCubo, vel , stop])


  return (
    <div className={`cubo w-[25px] h-[25px] rounded-sm  absolute tranition-all duration-100 ease-in-out`}
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
      }}
    ></div>
  )
}