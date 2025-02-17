import { useState } from "react";
import { PositionBolitaContext } from "./positionBolitaContext";
import { numeroAleatorioEntero } from "../services/aleatoriPosition";
import PropTypes from "prop-types";


// Este es el que nos provee de acceso al contexto
export function PositionBolitaProvider({ children }) {
    const {positionX, positionY} = numeroAleatorioEntero()


  const [positionBolita, setPositionBolita] = useState({
    x: positionX,
    y: positionY,
  });

  return (
    <PositionBolitaContext.Provider
      value={{
        positionBolita,
        setPositionBolita,
      }}
    >
      {children}
    </PositionBolitaContext.Provider>
  );
}

PositionBolitaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};