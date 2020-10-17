import React from 'react';

const WordCell = ({cell, x, y, mouseClick, currentClick, foundCoords, size}) => (
  
  <button 
    onClick={(e) => mouseClick(e,x,y)}
    className={`font-size-${size} puzzleSquare ${(foundCoords.some(coord => coord[0] === y && coord[1] === x) ? 'foundCell' : '')} ${(currentClick[0] === x && currentClick[1] === y)? 'selectedCell':''}`}  
    x={x} 
    y={y}
  >
    {cell}
  </button>

)

export default WordCell;