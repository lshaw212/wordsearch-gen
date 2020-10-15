import React from 'react';
import WordCell from './WordCell';

const WordRow = ({puzzle, y, x, mouseClick, currentClick, foundCoords, size}) => (
  <div className="word-row">
    {puzzle.map((p, i) => (
      <WordCell
        key={i}
        cell={p}
        y={y}
        x={x+i}
        foundCoords={foundCoords}
        size={size}
        mouseClick={mouseClick}
        currentClick={currentClick}
      />
    ))
    }
  </div>

)

export default WordRow;