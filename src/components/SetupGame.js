import React from 'react';

// Stop same word being repeated

const SetupGame = ({gridSize, onSubmit, onChangeGridSize, onKey}) => (
      
  <div>
    <h1>Enter words and create your grid!</h1>
    <div>
      <form onSubmit={onSubmit}>

        {gridSize == 6 &&
          <label>
            <input type='text' name='wordList' maxLength= {5}/>
            <input type='text' name='wordList' maxLength= {5}/>
            <input type='text' name='wordList' maxLength= {5}/>
            <input type='text' name='wordList' maxLength= {5}/>
            <input type='text' name='wordList' maxLength= {5}/>
          </label>
        }
        {gridSize == 9 &&
          <label>
            <input type='text' name='wordList' maxLength= {8}/>
            <input type='text' name='wordList' maxLength= {8}/>
            <input type='text' name='wordList' maxLength= {8}/>
            <input type='text' name='wordList' maxLength= {8}/>
            <input type='text' name='wordList' maxLength= {8}/>
            <input type='text' name='wordList' maxLength= {8}/>
            <input type='text' name='wordList' maxLength= {8}/>
          </label>
        }
        {gridSize == 12 &&
          <label>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
            <input type='text' name='wordList' maxLength= {11}/>
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