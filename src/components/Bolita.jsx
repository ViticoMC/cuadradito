import { useContext } from "react";
import { PositionBolitaContext } from "../context/positionBolitaContext";


export function Bolita() {

    // Establecer la posicion en el contexto
    const {positionBolita} = useContext(PositionBolitaContext)

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