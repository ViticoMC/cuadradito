import { useState, useEffect } from 'react'
import { asignarColor } from '../services/colorAleatorio'

export function useDirection() {
      const [direction, setDirection] = useState('ArrowUp');
      
        useEffect(() => {
          const handleKeyPress = (event) => {
      
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
      
           console.log("Cambie la direccion")
          asignarColor()
      
           return () => {
            window.removeEventListener('keydown', handleKeyPress)
          }
        }, [direction])

        return direction
}