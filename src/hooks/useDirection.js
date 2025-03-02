import { useState, useEffect } from 'react'
import { asignarColor } from '../services/colorAleatorio'
import { useGameStore } from '../store/game'

export function useDirection() {
      const [direction, setDirection] = useState('');
      const {setStop , stop} = useGameStore()




      
        useEffect(() => {
          const handleKeyPress = (event) => {


            setStop(false)

            if (event.key === 'ArrowUp' || event.key === 'w') {
              setDirection('ArrowUp')
            }
            else if (event.key === 'ArrowDown' || event.key === 's') {
              setDirection('ArrowDown')
            }
            else if (event.key === 'ArrowLeft' || event.key === 'a') {
              setDirection('ArrowLeft')
            }
            else if (event.key === 'ArrowRight' || event.key === 'd') {
              setDirection('ArrowRight')
            }
          };
      
          window.addEventListener('keydown', handleKeyPress)
      
          asignarColor()
      
           return () => {
            window.removeEventListener('keydown', handleKeyPress)
          }
        }, [direction])

        return direction
}