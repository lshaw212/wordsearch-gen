import React from 'react';

const WordList = ({words}) => (
      
  <div id="word-list">
    {words.map((word) => (
      <div>{word}</div>
    ))
    }
  </div>

)

export default WordList;