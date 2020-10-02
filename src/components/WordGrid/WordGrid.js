import React from 'react';
import WordRow from './WordRow';

let y = 0, x = 0;

const WordGrid = ({puzzle,mouseDown,mouseUp,foundCoords}) => (
  
  <div id="word-grid-container">
    <div id="word-grid">
      {puzzle.map((p, i) => (
        <WordRow
          key={i}
          rowLength={p.length}
          puzzle={p}
          y={y+i}
          x={x}
          foundCoords={foundCoords}
          mouseDown={mouseDown}
          mouseUp={mouseUp}
        />
      ))
      }
    </div>
  </div>

)

export default WordGrid;