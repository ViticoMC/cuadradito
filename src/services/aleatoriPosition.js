
import { maximos } from './maximos'

const { MaxX, MaxY } = maximos()


export function numeroAleatorioEntero() {
    let positionX=Math.floor(Math.random() * MaxX);
    let positionY=Math.floor(Math.random() * MaxY);
    return {positionX, positionY}
}

