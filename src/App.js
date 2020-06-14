import React, { Component } from 'react';
import { setEmptyPuzzle, setFilledPuzzle, addWord } from './components/GenerateGrid';
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
    addWord(9,"samsung");
    this.setState({puzzle:setFilledPuzzle()})
  }

  render(){

    return (
      <div className="App">
        <h2>Word Search!</h2>
        {/* <div id="puzzle"></div> */}
        {/* <WordGrid puzzle={this.state.puzzle}/> */}
        <button onClick={this.testBtn}>Clicky!</button>
      </div>
    );
  }
}

export default App;
