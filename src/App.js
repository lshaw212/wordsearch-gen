import React, { Component } from 'react';
import { retrievePuzzle, setEmptyPuzzle, generatePuzzle } from './components/GameLogic/GenerateGrid';
import { checkWord } from './components/GameLogic/CheckWord';
import SetupGame from './components/SetupGame';
import Game from './components/Game';
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
      gameStart:false,
      gameOver: false
    }
  }

  componentDidMount(){
    generatePuzzle(9,testArr);
    this.setState({puzzle:retrievePuzzle()})
    // this.setState({wordList:testArr});
  }

  testBtn = () => {
    generatePuzzle(9,testArr);
    this.setState({puzzle:retrievePuzzle()})
    this.setState({wordList:testArr});
  }

  handleChange = (e) => {
    this.setState({wordList: [...this.state.wordList, e.target.value]})
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
    this.setState({gameStart: true});
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
        {!this.state.gameStart
          ? <SetupGame
              startGame={this.startGame}
              onChange={this.handleChange.bind(this)}
            />
          : <Game 
              puzzle={this.state.puzzle}
              mouseDown={this.mouseDown}
              mouseUp={this.mouseUp}
              words={this.state.wordList}
              foundWords={this.state.foundList}
              testBtn={this.testBtn}
            />
        }
      </div>
    );
  }
}

export default App;
