import React from 'react';

const WordCell = ({cell,test, x, y}) => (
  
  <button className="puzzleSquare" x={x} y={y}>
    {cell}
  </button>

)

export default WordCell;