import {  useEffect } from 'react'
import { useContext } from 'react'
import { PositionContext } from '../context/positionContext'
import { useMoverCubo } from './useMoverCubo'



export function usePosition() {

    const {position} = useContext(PositionContext)
    const moverCubo=useMoverCubo()
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        moverCubo()
    }, 100);
      return () => clearInterval(interval);
  
    }, [position])
  
    
    return { position }
}