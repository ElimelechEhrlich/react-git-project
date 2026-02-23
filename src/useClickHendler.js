import { useState } from "react";

export function useClickHendler(secretRef, colorRef) {
  const [clickedCell, setClickedCell] = useState(null);
  const [clicksCounter, setClicksCounter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const showSecretColor = (e) => {
    if (e.target.id === secretRef.toString()) {
      e.target.classList.remove("cell");
      e.target.style.background = colorRef;
      e.target.classList.add("secret");
      setIsGameOver(true);
    } else {
      e.target.classList.remove("cell");
      e.target.classList.add("standard_cell", "scale");
      setTimeout(() => {e.target.classList.remove("scale")}, 120);
      e.target.textContent = "X";
    }
  };
  const onclick = (e) => {
    if (!isGameOver && e.target.classList.contains("cell")) {
      setClickedCell(e.target.id);
      setClicksCounter(clicksCounter + 1);
      showSecretColor(e);
    }
  };
  return { onclick, clicksCounter, clickedCell, isGameOver, setIsGameOver };
}

