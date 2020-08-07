import React from 'react';

const WordList = ({words, foundWords}) => (
      
  <div id="word-list">
    {words.map((word) => (
      <div
        className={foundWords.includes(word) ? 'found' : 'notFound'}
      >{word}</div>
    ))
    }
  </div>

)

export default WordList;