import React, { Component } from 'react';
import { retrievePuzzle, generatePuzzle } from './components/GameLogic/GenerateGrid';
import { checkWord } from './components/GameLogic/CheckWord';
import Drawing from './components/Drawing';
import SetupGame from './components/SetupGame';
import Game from './components/Game';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      puzzle: [],
      gridSize: 6,
      wordList: [''],
      foundList: [''],
      pos1: ['',''],
      pos2: ['',''],
      gameStart:false,
      gameOver: false
    }
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount(){
    // generatePuzzle(9,testArr);
    // this.setState({puzzle:retrievePuzzle()})
    // this.setState({wordList:testArr});
  }

  handleChangeGrid = (e) => {
    this.setState({gridSize: e.target.value});
  }

  // Gather all inputs, filter out the empty strings and push all words into the array
  // The array is set to the wordList and we start the game
  handleSubmit = (e) => {
    e.preventDefault();
    let arr = [], input = e.target.children[0].children;
    for (let i = 0; i < input.length; i++){
      if(input[i].value !== ''){
        arr.push(input[i].value);
      }
    }
    this.setState((state, props) => ({
      wordList: arr
    }), ()=>{
      console.log(this.state.wordList);
      this.startGame();
    });
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
  startGame = () => {
    generatePuzzle(this.state.gridSize,this.state.wordList);
    this.setState({puzzle:retrievePuzzle()})
    this.setState({gameStart: true});
  }

  resetGame(){
    this.setState({
      puzzle: [],
      gridSize: 6,
      wordList: [''],
      foundList: [''],
      pos1: ['',''],
      pos2: ['',''],
      gameStart: false, //rename to isGameStart
      gameOver: false
    });
  }

  render(){
    
    return (
      <div className="App">
        <h2>Word Search!</h2>
        <Drawing />
        {!this.state.gameStart
          ? <SetupGame
              startGame={this.startGame}
              onSubmit={this.handleSubmit.bind(this)}
              onKey={(e) => this.onKeyPress(e)}
              onChangeGridSize={this.handleChangeGrid.bind(this)}
              gridSize={this.state.gridSize}
            />
          : <Game 
              puzzle={this.state.puzzle}
              mouseDown={this.mouseDown}
              mouseUp={this.mouseUp}
              words={this.state.wordList}
              foundWords={this.state.foundList}
              resetBtn={this.resetGame}
            />
        }
      </div>
    );
  }
}

export default App;
