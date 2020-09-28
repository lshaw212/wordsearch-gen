import React from 'react';

const WordCell = ({cell, x, y, mouseDown, mouseUp, foundCoords}) => (
  
  <button onMouseDown={(e) => mouseDown(e, x, y) } onMouseUp={(e) => mouseUp(e, x, y)} className={"puzzleSquare " + (foundCoords.some(coord => coord[0] === y && coord[1] === x) ? 'foundCell' : 'notFound')} x={x} y={y}>
    {cell}
  </button>

)

export default WordCell;