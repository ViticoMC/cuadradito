import {create } from 'zustand'


export const useGameStore = create((set) => ({
    position: { x: 0, y: 0 },
    puntuacion: 0,
    mayorPuntuacion: 0,
    gameOver: false,
    stop: true,
    direction : '',
    fondoURL : '/fond1.jpg',
    orientacion : '',
    setPosition: ({x, y}) => set(()=>({position : {x , y}})),
    setPuntuacion: (punt) => set((state)=>({puntuacion : punt ? 0 : state.puntuacion+1})),
    setMayorPuntuacion: (mayorPuntuacion) => set({mayorPuntuacion}),
    setGameOver: (gameOver) => set({gameOver}),
    setStop: (stop) => set({stop}),
    setDirection: (direction) => set({direction}),
    setFondoURL: (fondoURL) => set({fondoURL}),
    setOrientacion: (orientacion) => set({orientacion})

}))
