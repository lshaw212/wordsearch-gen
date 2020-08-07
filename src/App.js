import React, { Component } from 'react';
import { retrievePuzzle, setEmptyPuzzle, generatePuzzle } from './components/GameLogic/GenerateGrid';
import { checkWord } from './components/GameLogic/CheckWord';
import WordGrid from './components/WordGrid';
import WordList from './components/WordList';
import GameOver from './components/GameOver';
import './index.css';

// let testArr = ["phone","adventure","diet","rustle","pidgeon","samsung", "spring", "barn", "music", "hamster", "cheese", "bacon", "caravan"];
let testArr = ["phone","barn","diet"]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      puzzle: setEmptyPuzzle(9),
      wordList: [''],
      foundList: [''],
      pos1: ['',''],
      pos2: ['',''],
      gameOver: false
    }
  }

  testBtn = () => {
    generatePuzzle(9,testArr);
    this.setState({puzzle:retrievePuzzle()})
    this.setState({wordList:testArr});
  }
  mouseDown = (e, x, y) => {
    this.setState((state, props) => ({
      pos1:[x,y]
   }), ()=>{
     //after callback 
   });
  }
  mouseUp = (e, x, y) => {
    this.setState((state, props) => ({
      pos2:[x,y]
   }), ()=>{
    this.checkPositions();
   });
  }

  checkPositions = () => {
    let word = checkWord(this.state.puzzle, this.state.pos1, this.state.pos2);
    console.log(word);
    if(this.state.wordList.includes(word) && !this.state.foundList.includes(word)){
      this.setState({foundList: [...this.state.foundList, word]});
      this.checkWinCondition()
    } else {
      // word not in list
    }

    

  }
  checkWinCondition(){
    if(this.state.wordList.length === this.state.foundList.length){
      alert("You won!");
      this.setState({gameOver: true});
    }
  }

  resetGame(){
    // this.setState({
    //   puzzle: setEmptyPuzzle(9),
    //   wordList: [''],
    //   foundList: [''],
    //   pos1: ['',''],
    //   pos2: ['',''],
    //   gameOver: false
    // })
  }

  render(){
    
    return (
      <div className="App">
        <h2>Word Search!</h2>
        {this.state.gameOver &&
          <GameOver resetBtn={this.resetGame} />
        }
        <div id="puzzle-grid">
          <WordGrid puzzle={this.state.puzzle} mouseDown={this.mouseDown} mouseUp={this.mouseUp}/>
          <WordList words={this.state.wordList} foundWords={this.state.foundList}/>
        </div>
        <div>
          <button onClick={this.testBtn}>Clicky!</button>
        </div>
      </div>
    );
  }
}

export default App;
