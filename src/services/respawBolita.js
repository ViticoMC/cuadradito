import { numeroAleatorioEntero } from './aleatoriPosition'
import { useGameStore } from '../store/game'
import { useBolitaStore } from '../store/bolita'

export function respawnBolita() {
    const {setPuntuacion , position} = useGameStore()
    
    const {positionBolita, setPositionBolita } = useBolitaStore()


    if (position.x === positionBolita.x && position.y === positionBolita.y) {
        setPositionBolita({ x: positionX, y: positionY })
        setPuntuacion()
    }


}

