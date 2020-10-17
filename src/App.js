import React, { Component } from 'react';
import { retrievePuzzle, initalisePuzzle } from './components/GameLogic/GenerateGrid';
import { checkWord } from './components/GameLogic/CheckWord';
import SetupGame from './components/SetupGame';
import Game from './components/Game';
import Contact from './components/Contact';
import Modal from './components/Modal';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);  
    this.state = {
      puzzle: [],
      gridSize: 9,
      wordList: [''],
      foundList: [''],
      pos1: '',
      pos2: '',
      isGameStart:false,
      isGameOver: false,
      coordsUsed: []
    }
    this.resetGame = this.resetGame.bind(this);
  }
  

  // This changes the size of the gride for our setup game
  handleChangeGrid = (e) => {
    this.setState({gridSize: parseFloat(e.target.value)});
  }

  // For the mouseclicks, we update and store informaton about the first and second cell position. 
  // we start by checking to see if this is the first mouse click and update the state accordingly
  // if this is the second click we check the positions to see if a word has been found.

  mouseClick = (e, x, y) => {
    if(this.state.pos1 === ''){
      this.setState((state, props) => ({
        pos1:[x,y]
     }), ()=>{
       //after callback 
     });
    } else {
      console.log("!");
      this.setState((state, props) => ({
        pos2:[x,y]
      }), ()=>{
        this.checkPositions();
      });
    }
  }

  // When two positions have been selected by a user, we check these positions to see if a word is possible and then if the word is in our word list.
  // If a word is found, we set the state for our foundlist, colour the cells for the word and then check if we have a win condition. 
  checkPositions = () => {
    let word = checkWord(this.state.puzzle, this.state.pos1, this.state.pos2);
    if(word!==undefined && this.state.wordList.includes(word.value) && !this.state.foundList.includes(word.value)){
      this.setState({foundList: [...this.state.foundList, word.value]});
      this.foundWordTileColour(word.posArr);
      this.checkWinCondition()
    } else {
      // word not in list
    }
    this.setState({pos1: '', pos2:''});
  }

  // We store the coordinates of found cells so we can pass this to each cell to know if it needs to be updated via CSS
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

  // We check to see if the game has been finished
  checkWinCondition(){
    if(this.state.wordList.length === this.state.foundList.length){
      setTimeout(() =>this.setState({isGameOver: true}), 500 );
    }
  }

  // Start game, sets the word list and initalises the puzzle to be played
  startGame = (arr) => {
    this.setState((state, props) => ({
      wordList: arr
    }), ()=>{
      initalisePuzzle(this.state.gridSize,this.state.wordList);
      this.setState({puzzle:retrievePuzzle(),isGameStart: true})  
    });
  }

  // Reset game to play gain
  resetGame(){
    this.setState({
      puzzle: [],
      gridSize: 9,
      wordList: [''],
      foundList: [''],
      pos1: '',
      pos2: '',
      isGameStart: false,
      isGameOver: false,
      coordsUsed: []
    });
  }


  // adapt and change this implementation
  showModal = e => {
    this.setState({
      isGameOver: !this.state.isGameOver
    });
  };

  render(){
    return (
      <div className="App">
        <div id="word-search-header" onClick={this.resetGame}>WORD SEARCH</div>
        {!this.state.isGameStart
          ? <SetupGame
              startGame={this.startGame}
              onKey={(e) => this.onKeyPress(e)}
              onChangeGridSize={this.handleChangeGrid.bind(this)}
              gridSize={this.state.gridSize}
            />
          : <Game 
              puzzle={this.state.puzzle}
              mouseClick={this.mouseClick}
              // mouseDown={this.mouseDown}
              // mouseUp={this.mouseUp}
              currentClick={this.state.pos1}
              words={this.state.wordList}
              foundWords={this.state.foundList}
              foundCoords={this.state.coordsUsed}
              size={this.state.gridSize}
              resetBtn={this.resetGame}
            />
        }
        <Modal onClose={this.showModal} show={this.state.isGameOver} resetGame={this.resetGame}/>
        <Contact />
      </div>
    );
  }
}

export default App;
