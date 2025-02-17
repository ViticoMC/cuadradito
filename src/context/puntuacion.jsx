import { useState } from "react";
import { PuntuacionContext } from "./puntuacionContext";
import PropTypes from "prop-types";

// Este es el que nos provee de acceso al contexto
export function PuntuacionProvider({ children }) {
  const [puntuacion, setPuntuacion] = useState(0);

  return (
    <PuntuacionContext.Provider
      value={{
        puntuacion,
        setPuntuacion,
      }}
    >
      {children}
    </PuntuacionContext.Provider>
  );
}

PuntuacionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};