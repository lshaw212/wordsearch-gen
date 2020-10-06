import React, { Component } from 'react';
import WordInput from './WordInput';
import { wordGenerator } from './WordListCollection/wordListGen';

class SetupGame extends Component {

  // Find better way of achieving this
  textBox = () => {
    let boxes = [];
    for(let i=0; i<this.props.gridSize-1; i++){
      boxes.push(<WordInput key={i} maxSize={this.props.gridSize - 1}/>);
    }
    return boxes;
  }

  fillBoxes = (size) => {
    console.log(wordGenerator(size));
  }

  render(){
    
    return (
      <div id="setup-container">
        <div id="setup-header">Pick the grid size and input the words you want in your game</div>
        <div id="setup-desc">Maximum word count is <strong>{this.props.gridSize}</strong> and each word can have <strong>{this.props.gridSize - 1}</strong> characters</div>
        {/* <div> */}
          <div id="setup-radio-input" onChange={this.props.onChangeGridSize}>
            <div>Grid Size:</div>
            <input type="radio" value='6' name="gridSize" id="radio_1"/>
            <label for="radio_1">6x6</label>
            <input type="radio" value='9' name="gridSize" id="radio_2" defaultChecked/>
            <label for="radio_2">9x9</label>
            <input type="radio" value='12' name="gridSize" id="radio_3"/>
            <label for="radio_3">12x12</label>
          </div>
          <form onSubmit={this.props.onSubmit}>
            <div id="setup-textbox-container">
              {this.textBox()}
            </div>
            <button className="btn btn-spacing" type="submit">Create!</button>
            <button onClick={this.fillBoxes(this.props.gridSize)}>Fill</button>
          </form>
        {/* </div> */}
      </div>
    );
  }
}
// const SetupGame = ({gridSize, onSubmit, onChangeGridSize, onKey}) => (
      
  

// )

export default SetupGame;