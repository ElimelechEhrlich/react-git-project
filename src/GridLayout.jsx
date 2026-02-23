import React from "react";

import Cell from "./Cell";

export default function GridLayout() {
  const grid = [];
  for (let cell = 0; cell < 100; cell++) {
    grid.push(cell);
  }
  return (
    <div className="grid">
      {grid.map((cell) => {
        return <Cell className="cell" key={cell} />;
      })}
    </div>
  );
}
