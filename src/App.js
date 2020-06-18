import React, { Component } from 'react';
import { setFilledPuzzle, addWord, retrievePuzzle, setEmptyPuzzle, generatePuzzle } from './components/GenerateGrid';
import WordGrid from './components/WordGrid';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      puzzle: setEmptyPuzzle()
    }
  }

  testBtn = () => {
    // setEmptyPuzzle();
    let testArr = ["phone","adventure","diet","rustle","pidgeon","samsung", "spring", "barn", "music", "hamster", "cheese", "bacon", "caravan"];
    // let testArr = ["christmas"];
    // let testArr = ["boooom","zoooom"]
    generatePuzzle(13,testArr);
    // addWord(8,"samsung");
    this.setState({puzzle:retrievePuzzle()})
  }

  render(){

    return (
      <div className="App">
        <h2>Word Search!</h2>
        {/* <div id="puzzle"></div> */}
        <div id="puzzle-grid">
          <WordGrid puzzle={this.state.puzzle}/>
        </div>
        <button onClick={this.testBtn}>Clicky!</button>
      </div>
    );
  }
}

export default App;
