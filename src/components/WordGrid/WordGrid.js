import React from 'react';
import WordRow from './WordRow';

let y = 0, x = 0;

const WordGrid = ({puzzle,mouseClick, currentClick,foundCoords,size}) => (
  
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
          mouseClick={mouseClick}
          size={size}
          currentClick={currentClick}
        />
      ))
      }
    </div>
  </div>

)

export default WordGrid;