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
          <p style={{margin:'0', color: "rgb(255, 255, 255)", fontSize:'35px', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'bold'}}>Welcome to the game!</p>
        <div className="flex flex-row header">
          <p style={{margin:'0', color: 'rgb(222, 92, 95)', fontSize:'35px', fontFamily: 'Gill Sans, sans-serif',  fontWeight: 'bold'}}>Find the color:</p>
          <Cell key={"1000"} bgColor={colorRef.current} className="cell_header" />
        </div>
        <GridLayout event={onclick} />
        <div style={{margin:'0'}}>
        <p style={{margin:'0', color: "rgb(255, 255, 255)", fontSize:'35px', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'bold', justifySelf:'center'}}>
          Clicks: <span style={{margin:'0', fontSize:'45px', fontWeight: 'bold'}}>{clicksCounter}</span>
        </p>
        <p style={{margin:'0',   transition: 'transform 2s', transitionTimingFunction:'cubic-bezier(0.5, 1, 0.5, 0.5)', transform: `${isGameOver?'scale(1.5) translate(0,-500%)':null}`, color: `${!isGameOver? 'rgb(252, 210, 79)': 'rgb(4, 241, 68)'}`, fontSize:'35px', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'bold', justifySelf:'center'}}>{!isGameOver? 'Keep Searching!': 'You found the secret color!'}</p>
        </div>
      </div>
    </>
  );
}

