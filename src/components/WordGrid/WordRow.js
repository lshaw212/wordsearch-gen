import React from 'react';
import WordCell from './WordCell';

const WordRow = ({puzzle, y, x, mouseDown, mouseUp, foundCoords}) => (
  <div className="word-row">
    {puzzle.map((p, i) => (
      <WordCell
        key={i}
        cell={p}
        y={y}
        x={x+i}
        foundCoords={foundCoords}
        mouseDown={mouseDown}
        mouseUp={mouseUp}
      />
    ))
    }
  </div>

)

export default WordRow;