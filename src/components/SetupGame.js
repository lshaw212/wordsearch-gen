import React from 'react';

const SetupGame = ({startGame, onChange}) => (
      
  <div>
    <h1>Enter words and create your grid!</h1>
    <div>
      <form action="">
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
      </form>
    </div>
    <button onClick={startGame}>Create Game</button>
  </div>

)

export default SetupGame;