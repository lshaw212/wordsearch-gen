import React, { Component } from 'react';
import WordInput from './WordInput';

class SetupGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  // Find better way of achieving this
  textBox = () => {
    let boxes = [];
    for(let i=0; i<this.props.gridSize; i++){
      boxes.push(<WordInput maxSize={this.props.gridSize - 1}/>);
    }
    return boxes;
  }

  render(){
    
    return (
      <div>
        <h1>Enter words and create your grid!</h1>
        <div>
          <form onSubmit={this.props.onSubmit}>
            <div>
              {this.textBox()}
            </div>
            <input type="submit" value="create"/>
          </form>
        </div>
        <div onChange={this.props.onChangeGridSize}>
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
    );
  }
}
// const SetupGame = ({gridSize, onSubmit, onChangeGridSize, onKey}) => (
      
  

// )

export default SetupGame;

// {gridSize == 6 &&
//   <label>
//     <input type='text' name='wordList' maxLength= {5} onKeyDown={(e) => onKey(e)}/>
//     <input type='text' name='wordList' maxLength= {5} onKeyPress='return !isNaN(event.key)'/>
//     <input type='text' name='wordList' maxLength= {5}/>
//     <input type='text' name='wordList' maxLength= {5}/>
//     <input type='text' name='wordList' maxLength= {5}/>
//   </label>
// }
// {gridSize == 9 &&
//   <label>
//     <input type='text' name='wordList' maxLength= {8}/>
//     <input type='text' name='wordList' maxLength= {8}/>
//     <input type='text' name='wordList' maxLength= {8}/>
//     <input type='text' name='wordList' maxLength= {8}/>
//     <input type='text' name='wordList' maxLength= {8}/>
//     <input type='text' name='wordList' maxLength= {8}/>
//     <input type='text' name='wordList' maxLength= {8}/>
//   </label>
// }
// {gridSize == 12 &&
//   <label>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//     <input type='text' name='wordList' maxLength= {11}/>
//   </label>
// }