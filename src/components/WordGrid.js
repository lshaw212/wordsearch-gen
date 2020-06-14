import React from 'react';
import WordRow from './WordRow';

let y = 0;
let x = 0;

const WordGrid = ({puzzle}) => (
      
  <div id="puzzle">
    {puzzle.map((p, i) => (
      <WordRow
        // key="jdasd"
        rowLength={p.length}
        puzzle={p}
        y={y+=1}
        x={x}
      />
    ))
    }
  </div>

)

export default WordGrid;