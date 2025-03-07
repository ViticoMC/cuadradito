import {create } from 'zustand'
import { numeroAleatorioEntero } from '../services/aleatoriPosition'


const {positionX, positionY} = numeroAleatorioEntero()


export const useBolitaStore = create((set) => ({
    positionBolita: { x: positionX, y: positionY },
    prevPositionRadio: { x: 0, y: 0 },
    setPrevPositionRadio: ({x, y}) => set(()=>({prevPositionRadio : {x , y}})),
    setPositionBolita: ({x, y}) => set(()=>({positionBolita : {x , y}}))
}))