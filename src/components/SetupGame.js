import React from 'react';


const SetupGame = ({gridSize, onSubmit, onChangeGridSize}) => (
      
  <div>
    <h1>Enter words and create your grid!</h1>
    <div>
      <form onSubmit={onSubmit}>

        {gridSize == 6 &&
          <label>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
          </label>
        }
        {gridSize == 9 &&
          <label>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
          </label>
        }
        {gridSize == 12 &&
          <label>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
            <input type='text' name='wordList'/>
          </label>
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