
import './index.css'
import { MainCuadro } from './components/MainCuadro'
import { Puntuacion } from './components/Puntuacion'

export function App() {


  return (
    <main className='flex flex-col h-1000px justify-start  items-center gap-4  '>
     <MainCuadro/>
     <Puntuacion/>
    </main>
  )
}


