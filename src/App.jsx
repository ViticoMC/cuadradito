
import './index.css'
import { MainCuadro } from './components/MainCuadro'
import { PuntuacionProvider } from './context/puntuacion'
import { Puntuacion } from './components/Puntuacion'

export function App() {


  return (
    <PuntuacionProvider>
     <MainCuadro/>
     <Puntuacion/>
   </PuntuacionProvider>
  )
}


