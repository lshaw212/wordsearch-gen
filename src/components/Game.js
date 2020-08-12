import React from 'react';
import WordGrid from './WordGrid/WordGrid';
import WordList from './WordList'

const Game = ({puzzle, mouseDown, mouseUp, words, foundWords, testBtn}) => (
      
  <div>
    <div id="puzzle-grid">
          <WordGrid puzzle={puzzle} mouseDown={mouseDown} mouseUp={mouseUp}/>
          <WordList words={words} foundWords={foundWords}/>
        </div>
        <div>
          <button onClick={testBtn}>Clicky!</button>
        </div>
  </div>

)

export default Game;