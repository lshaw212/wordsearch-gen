import React, { Component } from 'react';

class Modal extends Component{


  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.props.resetGame();
  }

  render(){
    if (!this.props.show) {
      return null;
    }
    return(
      <div className="modal">
        <div id="gameover-modal">
          <h2>{this.props.header}</h2>
          <div className="content">You won the game!</div>
          <div className="actions">
            <button className=" btn toggle-button" onClick={this.onClose}>
              {this.props.btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;