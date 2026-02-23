import React from "react";

import Cell from "./Cell";

export default function GridLayout({ event }) {
  const grid = [];
  for (let cell = 1; cell <= 100; cell++) {
    grid.push(cell);
  }
  return (
    <div className="grid">
      {grid.map((cell) => {
        return <Cell event={event} className="cell" key={cell} id={cell} />;
      })}
    </div>
  );
}
