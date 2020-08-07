import React from 'react';

const GameOver = ({resetBtn}) => (
      
  <div id="game-over-container">
    <button onClick={resetBtn}>Start over</button>
  </div>

)

export default GameOver;