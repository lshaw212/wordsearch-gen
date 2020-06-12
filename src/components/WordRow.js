import React from 'react';
import WordCell from './WordCell';

//figure out this issue

const WordRow = ({puzzle, test, y, x}) => (
  <div>
    {puzzle.map(p => (
      <WordCell cell={p} y={y} x={x+=1} />
    ))
    }
  </div>

)

export default WordRow;