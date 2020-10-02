import React from 'react';

const WordList = ({words, foundWords, reset}) => (
      
  <div id="word-list-container">
    <div id="word-list">
      {words.map((word, i) => (
        <div
          key={i}
          className={foundWords.includes(word) ? 'found' : ''}
        >{word}</div>
      ))
      }
    </div>
    <button onClick={reset}>Reset Game</button>
  </div>

)

export default WordList;