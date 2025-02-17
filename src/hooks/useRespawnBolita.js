import { useContext } from 'react'
import { PositionBolitaContext } from '../context/positionBolitaContext'
import { PositionContext } from '../context/positionContext'
import { numeroAleatorioEntero } from '../services/aleatoriPosition'
import { PuntuacionContext } from '../context/puntuacionContext'


export function useRespawnBolita() {
    const { positionX, positionY } = numeroAleatorioEntero()
    const {positionBolita, setPositionBolita } = useContext(PositionBolitaContext)
    const { position } = useContext(PositionContext)
    const {puntuacion, setPuntuacion} = useContext(PuntuacionContext)


    if (position.x === positionBolita.x && position.y === positionBolita.y) {
        setPositionBolita({ x: positionX, y: positionY })
        setPuntuacion(puntuacion + 1)
    }

}

