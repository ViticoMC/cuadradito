
import '../index.css'
import { usePosition } from '../hooks/usePosition'

export function Cuadradito() {
    const {position} = usePosition()

    return(
        <div className={`cubo w-[25px] h-[25px] rounded-sm  absolute tranition-all duration-100 ease-in-out`}
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
        }}
      ></div>
    )
}