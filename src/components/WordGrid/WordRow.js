import React from 'react';
import WordCell from './WordCell';

//figure out this issue

const WordRow = ({key,puzzle, test, y, x, mouseDown, mouseUp}) => (
  <div>
    {puzzle.map((p, i) => (
      <WordCell
        key={key}
        cell={p}
        y={y}
        x={x+i}
        mouseDown={mouseDown}
        mouseUp={mouseUp}
      />
    ))
    }
  </div>

)

export default WordRow;