
import { useEffect, useState } from 'react'
import './index.css'
import { asignarColor } from './services/colorAleatorio'

export function App() {

  let MaxX = 97
  let MaxY = 95

    if (window.innerWidth <= 360) {
      MaxX = 92
    } else if (window.innerWidth <= 768) {
      MaxX = 96
    }


  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('ArrowUp');

  useEffect(() => {
    const handleKeyPress = (event) => {
   
      if (event.key === 'ArrowUp' || event.key === 'w') {
        setPosition({ x: position.x, y: position.y - 1 < 0 ? position.y : position.y - 1 })
      }
      else if (event.key === 'ArrowDown' || event.key === 's') {
        setPosition({ x: position.x, y: position.y + 1 > MaxY ? position.y : position.y + 1 })
      }
      else if (event.key === 'ArrowLeft' || event.key === 'a') {
        setPosition({ x: position.x - 1 < 0 ? position.x : position.x - 1, y: position.y })
      }
      else if (event.key === 'ArrowRight' || event.key === 'd') {
        setPosition({ x: position.x + 1 > MaxX ? position.x : position.x + 1, y: position.y })
      }
    };

    window.addEventListener('keydown', handleKeyPress)


    asignarColor()

    console.log(position)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [position , MaxX, MaxY])


  return (
    <main className='w-[360px] h-[600px] md:w-[720px] lg:w-[990px]  bg-gray-950 m-auto border-4 border-black relative'>
      <div className={`cubo w-[25px] h-[25px] rounded-sm  absolute tranition-all duration-300 ease-in-out`}
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
        }}
      ></div>
    </main>
  )
}


