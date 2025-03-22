
import '../index.css'
import { useGameStore } from '../store/game'
import { useBolitaStore } from '../store/bolita'
import { useMoverCubo } from '../hooks/useMoverCubo'
import { numeroAleatorioEntero } from '../services/aleatoriPosition'
import { useEffect, useState } from 'react'
import { useObstaculos } from '../store/obstaculos'
import { useDirection } from '../hooks/useDirection'
import { backgroundMusic , eatSound , choqueSound } from '../sound/sound'



export function Cuadradito() {

  const {orientacion, setOrientacion, position , puntuacion, setPuntuacion, setGameOver , setStop  , stop  } = useGameStore()
  const [isOpen , setIsOpen] = useState(false)
  const { positionBolita, setPositionBolita , setPrevPositionRadio } = useBolitaStore()
  const {obstaculosPosition } = useObstaculos()
  const moverCubo = useMoverCubo()
  const { positionX, positionY } = numeroAleatorioEntero()
  const direction = useDirection()
  


  const isInX = (position.x < positionBolita.x &&  position.x+19 > positionBolita.x) 
  || (position.x < positionBolita.x+14 &&  position.x+19 > positionBolita.x+14)
  const isInY = (position.y < positionBolita.y &&  position.y+19 > positionBolita.y) 
  || (position.y < positionBolita.y+14 &&  position.y+19 > positionBolita.y+14)

  let chocar=false

  for(let i =0 ; i< obstaculosPosition.x.length;i++){

    const isInX = (position.x < obstaculosPosition.x[i]+5 &&  position.x+19 > obstaculosPosition.x[i]+5) 
    || (position.x < obstaculosPosition.x[i]+14 &&  position.x+19 > obstaculosPosition.x[i]+14)
    const isInY = (position.y < obstaculosPosition.y[i]+5 &&  position.y+19 > obstaculosPosition.y[i]+5) 
    || (position.y < obstaculosPosition.y[i]+14 &&  position.y+19 > obstaculosPosition.y[i]+14)


    if(isInX && isInY){

      chocar = true  
      break;
    }
  }
 



  if (isInX && isInY) {
    setPrevPositionRadio({x: positionX , y: positionY})
    setPositionBolita({ x: positionX, y: positionY })
    setPuntuacion()
    eatSound.play()
  }

    const bordes =(position.x > 380 || position.y > 380 || position.x < 0 || position.y <0 )

    if ((bordes || chocar) && !stop ) {
      setGameOver(true)
      setStop(true)
      backgroundMusic.stop()
      choqueSound.play()
 }
      


  let vel = 150 - 10 * (puntuacion / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!stop){
      moverCubo()
      setIsOpen(!isOpen)
      switch (direction) {
        case 'ArrowUp':
          setOrientacion('rotate-[270deg]')
          break;
        case 'ArrowDown':
          setOrientacion('rotate-[90deg]')
          break;
        case 'ArrowLeft':
          setOrientacion('scale-x-[-1]')
    
          break;
        case 'ArrowRight':
          setOrientacion ('rotate-[0deg]')
    
          break;
      }
      }
    }, vel);
    return () => clearInterval(interval);

  }, [position, moverCubo, vel, stop, isOpen, setIsOpen, direction, setOrientacion])


  return (
    <>
    
    <div className={`cubo w-[20px] h-[20px] rounded-sm  absolute tranition-all duration-100 ease-in-out ${orientacion}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      {
      isOpen ? 
    <img src='/rostro.jpg'/> :
    <img src='/cerrado.jpg'/>
      }
    </div>
    </>
  )
}