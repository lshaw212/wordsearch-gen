import React, { Component } from 'react';

class WordInput extends Component {
  state = {
    valueText: '',
    propsText: ''
  }

  // This work around is messy but the onyl way I found to achieve what I want.
  // as componentRecieveProps is deprecated, this function is the next solution.
  // We want to update the input fields if we recieve generated words from state.
  // but we only want to update the state if the values are..
  // ADD MORE INFORMATION ON THIS.
  static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.propsText !== nextProps.inputValue || prevState.valueText === prevState.propsText){
      return {
        valueText: nextProps.inputValue,
        propsText: nextProps.inputValue
      }
    } else return null
  }

  // Check the input into the text box for what character it is.
  // Spaces, numbers and special characters are not allowed, only plain text letters
  checkLetterOnly = (e) => {
    let value = e.target.value
    value = (value.replace(/[^A-Za-z]/ig, '')).toUpperCase();
    this.setState({
      valueText: value,
    });
  }
  render(){
    return (
      <input type='text' className="setup-textboxes" name='wordList' value={this.state.valueText} onChange={this.checkLetterOnly} maxLength= {this.props.maxSize}/>
    );
  }
}

export default WordInput;
