import { useState } from 'react'
import { PositionContext } from './positionContext'
import PropTypes from 'prop-types'



// Este es el que nos provee de acceso al contexto
export function PositionProvider ({ children }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  return (
    <PositionContext.Provider value={{
      position,
      setPosition
    }}
    >
      {children}
    </PositionContext.Provider>
    )
}

PositionProvider.propTypes = {
  children: PropTypes.node.isRequired
}