import React, { Component } from 'react';

class WordInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      valueText: '' 
    }
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({valueText:nextProps.inputValue});
  }
    
  // Check the input into the text box for what character it is.
  // Spaces, numbers and special characters are not allowed, only plain text letters
  checkLetterOnly = (e) => {
    let value = e.target.value
    value = (value.replace(/[^A-Za-z]/ig, '')).toLowerCase();
    this.setState({
      valueText: value,
    });
  }
  render(){
    return (
      <input type='text' className="setup-textboxes" name='wordList' value={this.state.valueText} onChange={this.checkLetterOnly} maxLength= {this.props.maxSize} />
    );
  }
}

export default WordInput;
