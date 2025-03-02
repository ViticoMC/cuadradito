import {create } from 'zustand'
import { numeroAleatorioEntero } from '../services/aleatoriPosition'


const {positionX, positionY} = numeroAleatorioEntero()


export const useBolitaStore = create((set) => ({
    positionBolita: { x: positionX, y: positionY },
    setPositionBolita: ({x, y}) => set(()=>({positionBolita : {x , y}}))
}))