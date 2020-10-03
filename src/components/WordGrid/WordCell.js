import React from 'react';

const WordCell = ({cell, x, y, mouseDown, mouseUp, foundCoords, size}) => (
  
  <button onMouseDown={(e) => mouseDown(e, x, y) } onMouseUp={(e) => mouseUp(e, x, y)} className={`font-size-${size}` + " puzzleSquare " + (foundCoords.some(coord => coord[0] === y && coord[1] === x) ? 'foundCell' : '')} x={x} y={y}>
    {cell}
  </button>

)

export default WordCell;