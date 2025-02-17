import { useContext } from "react";
import { PositionBolitaContext } from "../context/positionBolitaContext";

export function usePositionBolita() {
  const context = useContext(PositionBolitaContext);
  return context;
}