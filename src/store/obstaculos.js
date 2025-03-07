import {create } from 'zustand'


export const useObstaculos = create((set) => ({
    obstaculos: [],
    obstaculosPosition : {
        x:[],
        y:[],
    },
    setObstaculosPosition: (newObstaculosPosition , reset) => set((state)=>({
        obstaculosPosition: !reset ? {
            x: [...state.obstaculosPosition.x, newObstaculosPosition.positionX],
            y: [...state.obstaculosPosition.y, newObstaculosPosition.positionY],
        } : {
            x: [], 
            y:[]
        }
    })),
    setObstaculos: (obstaculos)=>set({obstaculos}),
}))