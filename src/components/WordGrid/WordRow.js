import React from 'react';
import WordCell from './WordCell';

//figure out this issue

const WordRow = ({key,puzzle, test, y, x, mouseDown, mouseUp, foundCoords}) => (
  <div>
    {puzzle.map((p, i) => (
      <WordCell
        key={key}
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