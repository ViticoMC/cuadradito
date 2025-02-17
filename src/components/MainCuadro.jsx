import '../index.css'
import { Cuadradito } from './Cuadradito'
import { PositionProvider } from '../context/position'

export function MainCuadro() {

  

  return (
    <main className='w-[360px] h-[600px] md:w-[720px] lg:w-[990px]  bg-gray-950 m-auto border-4 border-black relative rounded-sm'>
      <PositionProvider>
      <Cuadradito/>
      </PositionProvider>
    </main>
  )
}
