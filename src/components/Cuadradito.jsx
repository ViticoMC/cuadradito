
import '../index.css'
import { useGameStore } from '../store/game'
import { useBolitaStore } from '../store/bolita'
import { useMoverCubo } from '../hooks/useMoverCubo'
import { numeroAleatorioEntero } from '../services/aleatoriPosition'
import { useEffect } from 'react'
import { useObstaculos } from '../store/obstaculos'


export function Cuadradito() {

  const { position , puntuacion, setPuntuacion, setGameOver , setStop  , stop  } = useGameStore()
  const { positionBolita, setPositionBolita , setPrevPositionRadio } = useBolitaStore()
  const {obstaculosPosition } = useObstaculos()
  const moverCubo = useMoverCubo()
  const { positionX, positionY } = numeroAleatorioEntero()


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
      console.log(position)
      console.log(obstaculosPosition.x[i] , obstaculosPosition.y[i])
      chocar = true  
      break;
    }
  }
 



  if (isInX && isInY) {
    setPrevPositionRadio({x: positionX , y: positionY})
    setPositionBolita({ x: positionX, y: positionY })
    setPuntuacion()
  }

    const bordes =(position.x > 380 || position.y > 380 || position.x < 0 || position.y <0 )

    if ((bordes || chocar) && !stop ) {
      // setObstaculosPosition({x:0 , y:0} , true)
      // setPosition({x:0 , y :0})
      // setPuntuacion(true)
      setGameOver(true)
      setStop(true)
 }
      


  let vel = 150 - 10 * (puntuacion / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!stop){
      moverCubo()
      }
    }, vel);
    return () => clearInterval(interval);

  }, [position, moverCubo, vel , stop])


  return (
    <>
    
    <div className={`cubo w-[20px] h-[20px] rounded-sm  absolute tranition-all duration-100 ease-in-out`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    ></div>
    </>
  )
}