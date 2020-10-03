import React from 'react';
import WordGrid from './WordGrid/WordGrid';
import WordList from './WordList'
import TextRules from './TextRules';

const Game = ({puzzle, mouseDown, mouseUp, words, foundWords, foundCoords, size, resetBtn}) => (
      
  <div id="game-container">
    <div id="puzzle-grid">
      <WordGrid puzzle={puzzle} mouseDown={mouseDown} mouseUp={mouseUp} foundCoords={foundCoords} size={size}/>
      <WordList words={words} foundWords={foundWords} reset={resetBtn}/>
    </div>
    <div>
      <TextRules />
    </div>
  </div>

)

export default Game;