import React from 'react';

let gridSize
const SetupGame = ({startGame, gridSize, onSubmit, onChangeGridSize}) => (
      
  <div>
    <h1>Enter words and create your grid!</h1>
    <div>
      <form onSubmit={onSubmit}>
        {gridSize == 6 &&
          <div>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
          </div>
        }
        {gridSize == 9 &&
          <div>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
          </div>
        }
        {gridSize == 12 &&
          <div>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
          </div>
        }
        <input type="submit" value="create"/>
      </form>
    </div>
    <div onChange={onChangeGridSize}>
      <label>
        <input type="radio" value='6' name="gridSize" defaultChecked/>
        6x6
      </label>
      <label>
        <input type="radio" value='9' name="gridSize"/>
        9x9
      </label>
      <label>
        <input type="radio" value='12' name="gridSize"/>
        12x12
      </label>
    </div>
  </div>

)

export default SetupGame;