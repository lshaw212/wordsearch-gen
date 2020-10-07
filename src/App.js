import React, { Component } from 'react';
import { retrievePuzzle, initalisePuzzle } from './components/GameLogic/GenerateGrid';
import { checkWord } from './components/GameLogic/CheckWord';
import SetupGame from './components/SetupGame';
import Game from './components/Game';
import Contact from './components/Contact';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      puzzle: [],
      gridSize: 9,
      wordList: [''],
      foundList: [''],
      pos1: ['',''],
      pos2: ['',''],
      isGameStart:false,
      isGameOver: false,
      coordsUsed: []
    }
    this.resetGame = this.resetGame.bind(this);
  }

  handleChangeGrid = (e) => {
    this.setState({gridSize: parseFloat(e.target.value)});
  }

  // Gather all inputs, filter out the empty strings and push all words into the array(while filtering out empty strings or duplicates)
  // The array is set to the wordList and we start the game
  handleSubmit = (e) => {
    e.preventDefault();
    let arr = [], input = e.target.children[0].children;
    for (let i = 0; i < input.length; i++){
      if(input[i].value !== '' && !arr.includes(input[i].value)){
        arr.push(input[i].value);
      }
    }
    if(arr.length > 0){
      this.setState((state, props) => ({
        wordList: arr
      }), ()=>{
        this.startGame();
      });
    }
    return
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
    if(word!==undefined && this.state.wordList.includes(word.value) && !this.state.foundList.includes(word.value)){
      this.setState({foundList: [...this.state.foundList, word.value]});
      this.foundWordTileColour(word.posArr);
      this.checkWinCondition()
    } else {
      // word not in list
    }
  }

  foundWordTileColour(arr){
    let newArr = []
    for(let val of arr){
      if(!this.state.coordsUsed.includes(val))
        newArr.push(val)
    }
    this.setState({
      coordsUsed: [...this.state.coordsUsed, ...newArr]
    });
  }

  checkWinCondition(){
    if(this.state.wordList.length === this.state.foundList.length){
      alert("You won!");
      this.setState({isGameOver: true});
    }
  }
  startGame = () => {
    initalisePuzzle(this.state.gridSize,this.state.wordList);
    this.setState({puzzle:retrievePuzzle(),isGameStart: true})
  }

  resetGame(){
    this.setState({
      puzzle: [],
      gridSize: 9,
      wordList: [''],
      foundList: [''],
      pos1: ['',''],
      pos2: ['',''],
      isGameStart: false,
      isGameOver: false,
      coordsUsed: []
    });
  }

  render(){
    return (
      <div className="App">
        <div id="word-search-header" onClick={this.resetGame}>WORD SEARCH</div>
        {!this.state.isGameStart
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
              foundCoords={this.state.coordsUsed}
              size={this.state.gridSize}
              resetBtn={this.resetGame}
            />
        }
        <Contact />
      </div>
    );
  }
}

export default App;
