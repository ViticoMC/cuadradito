import { create } from "zustand";

export const useAudios = create((set)=>({
    isChoqueSound : false,
    isEatSound : false,
    isBackgroundMusic : false,
    setIsChoqueSound : (value) => set(()=>({choqueSound : value})),
    setIsEatSound : (value) => set(()=>({eatSound : value})),
    setIsBackgroundMusic : (value) => set(()=>({isBackgroundMusic : value}))
}))