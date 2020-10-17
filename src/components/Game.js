import React from 'react';
import WordGrid from './WordGrid/WordGrid';
import WordList from './WordList'
import TextRules from './TextRules';

const Game = ({puzzle, mouseClick, currentClick, words, foundWords, foundCoords, size, resetBtn}) => (
      
  <div id="game-container">
    <div id="puzzle-grid">
      <WordGrid puzzle={puzzle} mouseClick={mouseClick} foundCoords={foundCoords} size={size} currentClick={currentClick}/>
      <WordList words={words} foundWords={foundWords} reset={resetBtn}/>
    </div>
    <TextRules/>
  </div>

)

export default Game;