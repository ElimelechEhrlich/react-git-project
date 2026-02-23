import React from "react";
import Node from "./Node";

export default function GridLayout() {
    const grid = [];
  for (let row = 0; row < 9; row++) {
    const currentRow = [];
    for (let col = 0; col < 10; col++) {
      currentRow.push(new Node);
    }
    grid.push(currentRow);
  }
  return (
    <div className="grid">
      {
        grid.map((row, rowId) => {
          return(
            <div className="row" key={rowId}>

              {
                row.map((node, nodeId) => {
                  return (
                    <Node></Node>
                  );
                })
              }
              </div>
          )
        })
      }
    </div>
  )
}
