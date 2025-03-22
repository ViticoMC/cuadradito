import { Cuadradito } from './Cuadradito';
import { Bolita } from './Bolita';
import { ModalLoser } from './ModalLoser';
import { useGameStore } from '../store/game';
import { useObstaculos } from '../store/obstaculos';
import { Obstaculo } from './Obstaculo';
import { useEffect } from 'react';
import { numeroAleatorioEntero } from '../services/aleatoriPosition';
import '../index.css';
import { useBolitaStore } from '../store/bolita';

export function MainCuadro() {

  const {puntuacion , fondoURL} = useGameStore()
  const {obstaculos , setObstaculos , setObstaculosPosition } = useObstaculos()
  const {positionBolita , prevPositionRadio} = useBolitaStore()

 

  useEffect(() => {
    setObstaculosPosition({x:0 , y :0} , true)

  const obstacles =[]
   for(let i = 0; i < puntuacion; i++){

       let positionX , positionY = 0

    do{
        ( {positionX , positionY} = numeroAleatorioEntero())
    }while( (positionX >= prevPositionRadio.x-80  && positionX<=prevPositionRadio.x+80) && (positionY >= prevPositionRadio.y-80  && positionY<=prevPositionRadio.y+80));

      setObstaculosPosition({positionX , positionY} , false)
      obstacles.push(<Obstaculo key={crypto.randomUUID()} positionX={positionX} positionY={positionY} />)
   }
   setObstaculos(obstacles)
  }, [positionBolita.x, positionBolita.y, puntuacion, setObstaculos, prevPositionRadio, setObstaculosPosition])

 
  return (
    <section className='w-[410px] h-[410px]  border-4 border-black relative rounded-sm flex flex-row p-[1px]'
    
    style={{
      backgroundImage : `url(${fondoURL})`,
      backgroundRepeat : 'no-repeat',
      backgroundSize : 'cover',
      backgroundPosition : 'bottom'
    }}>
      {
        obstaculos.map((obstaculo) => obstaculo)
      }
      <Bolita />
      <Cuadradito />
      <ModalLoser />
     
    </section>
  );
}