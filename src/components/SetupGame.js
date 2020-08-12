import React from 'react';

const SetupGame = ({startGame, onChange, onSubmit}) => (
      
  <div>
    <h1>Enter words and create your grid!</h1>
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        <input type='text' name='wordList' onChange={onChange}/>
        {/* <button>Create Game</button> */}
        <input type="submit" value="create"/>
      </form>
    </div>
  </div>

)

export default SetupGame;