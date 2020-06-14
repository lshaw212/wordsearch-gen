import React from 'react';
import WordCell from './WordCell';

//figure out this issue

const WordRow = ({key,puzzle, test, y, x}) => (
  <div>
    {puzzle.map(p => (
      <WordCell
        key={key}
        cell={p}
        y={y}
        x={x+=1}
      />
    ))
    }
  </div>

)

export default WordRow;