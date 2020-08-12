import React from 'react';

const WordCell = ({cell,test, x, y, key, mouseDown, mouseUp}) => (
  
  <button onMouseDown={(e) => mouseDown(e, x, y) } onMouseUp={(e) => mouseUp(e, x, y)} className="puzzleSquare" x={x} y={y}>
    {cell}
  </button>

)

export default WordCell;