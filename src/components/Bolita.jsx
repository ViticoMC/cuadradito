import { useBolitaStore } from "../store/bolita";

export function Bolita() {
  const { positionBolita } = useBolitaStore();

  return (
    // Contenedor para centrar la bolita
    <div
      className="w-[20px] h-[20px] flex flex-col items-center justify-center absolute  "
      style={{
        top: `${positionBolita.y}px`,
        left: `${positionBolita.x}px`,
      }}
    >
      {/* Bolita para capturar y aumentar puntuacion */}
      <div className="w-[15px] h-[15px] rounded-full bg-blue-600">
        {/* <img src="/apple.jpg" alt="" /> */}
      </div>
    </div>
  );
}
