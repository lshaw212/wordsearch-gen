import React, { Component } from 'react';
import WordInput from './WordInput';
import { wordGenerator } from './WordListCollection/wordListGen';

class SetupGame extends Component {
  
  state={
    values: []
  }

  // Gather all inputs, filter out the empty strings and push all words into the array(while filtering out empty strings or duplicates)
  // The array is set to the wordList and we start the game
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({values: []});
    let arr = [], input = e.target.children[1].children;
    for (let i = 0; i < input.length; i++){
      if(input[i].value !== '' && !arr.includes(input[i].value)){
        arr.push(input[i].value);
      }
    }
    if(arr.length > 0){
      this.props.startGame(arr)
    }
    return
  }

  // Find better way of achieving this
  textBox = () => {
    let boxes = [];
    for(let i=0; i<this.props.gridSize-1; i++){
      boxes.push(<WordInput 
                  key={i}
                  maxSize={this.props.gridSize - 1}
                  inputValue={this.state.values[i]? this.state.values[i] : ''}
                />);
    }
    return boxes;
  }

  fillBoxes = () => {
    let test = wordGenerator(this.props.gridSize)
    this.setState({values: test});
  }

  radioClick = () => {
    this.setState({values: []});
  }

  render(){
    return (
      <div id="setup-container">
        <div id="setup-header">Pick the grid size and input the words you want in your game</div>
        <div id="setup-desc">Maximum word count is <strong>{this.props.gridSize}</strong> and each word can have <strong>{this.props.gridSize - 1}</strong> characters</div>
        <form onSubmit={this.handleSubmit}>
            <div id="setup-radio-input" onChange={this.props.onChangeGridSize}>
              <div>Grid Size:</div>
              <input type="radio" value={6} name="gridSize" id="radio_1"/>
              <label htmlFor="radio_1" onClick={this.radioClick}>6x6</label>
              <input type="radio" value={9} name="gridSize" id="radio_2" defaultChecked/>
              <label htmlFor="radio_2" onClick={this.radioClick}>9x9</label>
              <input type="radio" value={12} name="gridSize" id="radio_3"/>
              <label htmlFor="radio_3" onClick={this.radioClick}>12x12</label>
            </div>
            <div id="setup-textbox-container">
              {this.textBox()}
            </div>
            <button className="btn" onClick={this.fillBoxes} type="button">Generate Random Words</button>
            <button className="btn btn-spacing" type="submit">Create!</button>
          </form>
      </div>
    );
  }
}
// const SetupGame = ({gridSize, onSubmit, onChangeGridSize, onKey}) => (
      
  

// )

export default SetupGame;