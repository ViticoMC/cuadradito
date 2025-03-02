import { useBolitaStore } from '../store/bolita'



export function Bolita() {

    const {positionBolita} = useBolitaStore()
    



    return (
        // Contenedor para centrar la bolita
        <div className="w-[25px] h-[25px] flex flex-col items-center justify-center absolute  "
        style={{
            top: `${positionBolita.y}%`,
            left: `${positionBolita.x}%`,
        }}
        >
            {/* Bolita para capturar y aumentar puntuacion */}
            <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full"></div>
        </div>

    )
}