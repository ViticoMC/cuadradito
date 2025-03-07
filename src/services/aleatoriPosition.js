import { dimensiones } from '../const/dimensiones'


export function numeroAleatorioEntero() {
    let positionX=Math.floor(Math.random() * 20)*20;
    let positionY=Math.floor(Math.random() * 20)*20;
    return {positionX, positionY}
}


export function numeroAleatorioDimension() {
    return dimensiones[Math.floor(Math.random() * dimensiones.length)]
}