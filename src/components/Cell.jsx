import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import catscream from '../catscream.mp3';
import kittensound from '../kittensound.mp3';

class GameBoardCell extends React.Component {

  render(){
    let cellState = this.props.state;
    let classes = ['cell', `cell-is-${cellState.checked ? 'checked' : 'unchecked'}`, `cell-is-${cellState.value}`].join(' ');
    let audio = null;
    let src = null;
    
    if (cellState.value=="on" && this.props.boardType== "control"){
		src= kittensound;
    } else if (cellState.checked && cellState.value=="on" && this.props.boardType== "game"){ 
    	src= catscream; 
    }
    
    if (src) {
    	audio= <audio src={ src } autoPlay ></audio>
    }

    return (

      <button className={classes} onClick={this.props.handleClick.bind(this, cellState) }>
      {audio}
      </button>
    )
  }
}

export default GameBoardCell;
