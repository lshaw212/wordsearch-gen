import React, { Component } from 'react';
import { retrievePuzzle, setEmptyPuzzle, generatePuzzle } from './components/GameLogic/GenerateGrid';
import { checkWord } from './components/GameLogic/CheckWord';
import WordGrid from './components/WordGrid';
import WordList from './components/WordList';
import './index.css';

// let testArr = ["phone","adventure","diet","rustle","pidgeon","samsung", "spring", "barn", "music", "hamster", "cheese", "bacon", "caravan"];
let testArr = ["phone","barn","diet"]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      puzzle: setEmptyPuzzle(9),
      wordList: [''],
      pos1: ['',''],
      pos2: ['','']
    }
  }

  testBtn = () => {
    generatePuzzle(9,testArr);
    this.setState({puzzle:retrievePuzzle()})
    this.setState({wordList:testArr});
  }
  mouseDown = (e, x, y) => {
    // this.setState({pos1:x});
    // console.log("pos1: " + this.state.pos1);
    this.setState((state, props) => ({
      pos1:[x,y]
   }), ()=>{
     //after callback 
   });
  }
  mouseUp = (e, x, y) => {
    // this.setState({pos2:[x,y]});
    // console.log("pos2: " + this.state.pos2);
    this.setState((state, props) => ({
      pos2:[x,y]
   }), ()=>{
    this.checkPositions();
   });
  }

  checkPositions = () => {
    checkWord(this.state.puzzle, this.state.pos1, this.state.pos2);
  }

  render(){
    
    return (
      <div className="App">
        <h2>Word Search!</h2>
        {/* <div id="puzzle"></div> */}
        <div id="puzzle-grid">
          <WordGrid puzzle={this.state.puzzle} mouseDown={this.mouseDown} mouseUp={this.mouseUp}/>
          <WordList words={this.state.wordList}/>
        </div>
        <div>
          <button onClick={this.testBtn}>Clicky!</button>
        </div>
      </div>
    );
  }
}

export default App;
