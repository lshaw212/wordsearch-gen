import React from 'react';
import WordRow from './WordRow';

let y = 0;
let x = 0;

const WordGrid = ({puzzle,mouseDown,mouseUp}) => (
      
  <div id="puzzle">
    {puzzle.map((p, i) => (
      <WordRow
        // key="jdasd"
        rowLength={p.length}
        puzzle={p}
        y={y+i}
        x={x}
        mouseDown={mouseDown}
        mouseUp={mouseUp}
      />
    ))
    }
  </div>

)

export default WordGrid;