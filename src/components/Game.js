import React from 'react';
import WordGrid from './WordGrid/WordGrid';
import WordList from './WordList'

const Game = ({puzzle, mouseDown, mouseUp, words, foundWords, foundCoords, resetBtn}) => (
      
  <div>
    <div id="puzzle-grid">
      <WordGrid puzzle={puzzle} mouseDown={mouseDown} mouseUp={mouseUp} foundCoords={foundCoords}/>
      <WordList words={words} foundWords={foundWords}/>
    </div>
    <div>
      <button onClick={resetBtn}>Reset Game</button>
    </div>
  </div>

)

export default Game;