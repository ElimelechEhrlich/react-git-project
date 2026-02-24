import React, { useEffect, useRef } from "react";
import GridLayout from "./GridLayout";
import Cell from "./Cell";
import { useClickHendler } from "./useClickHendler";

export default function App() {
  const secretRef = useRef(Math.floor(Math.random() * (100 - 1 + 1) + 1));
  const colorRef = useRef("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
  const { onclick, clicksCounter, clickedCell, isGameOver, setIsGameOver } = useClickHendler(secretRef.current, colorRef.current);
  useEffect(() =>console.log(secretRef.current),[])
  return (
    <>
      <div className="background justify-around flex flex-col">
          <p className="text" >Welcome to the game!</p>
        <div className="flex flex-row header">
          <p className="text red_text" >Find the color:</p>
          <Cell key={"1000"} bgColor={colorRef.current} className="cell_header" />
        </div>
        <GridLayout event={onclick} />
        <div>
        <p className="text" >
          Clicks: <span className="text">{clicksCounter}</span>
        </p>
        <p className={`text ${isGameOver? 'isGameOver': 'yello_text'}`}>{!isGameOver && clicksCounter > 0? 'Keep Searching!': isGameOver? 'You found the secret color!': 'Search...'}</p>
        </div>
      </div>
    </>
  );
}

