import React from 'react';
import backgroundmusic from '../battlecat.mp3';
import Board from './Board.jsx';
import Game from '../Game.js'

class Interface extends React.Component {

  constructor(props){
    super(props);
    this.game = new Game();
    let { gridSize } = this.props;
    let { started, board } = this.game.createBoard(this.props.gridSize);
    this.state = { board, started, gridSize }
  }

  startGame(){
    let started = true;
    this.setState({started});
  }

  toggleState(index){
    let board = this.state.board;
    board = this.game.toggleCell(index, board);
    this.setState({board});
  }

  checkCell(index){
    let board = this.state.board;
    board = this.game.checkCell(index, board);;
    this.setState({board});
  }

  render(){
    let { started, board } = this.state;
    return (
    
      <section className="game">
        <img className="logo" src="http://s4.postimg.org/x6ffo90t9/zombie_battle.png" /> 
        <audio src={ backgroundmusic } autoPlay loop>
        </audio>
        { !started && <Board boardType="control" handleClick={ this.toggleState.bind(this) } board={ board }></Board> }
        { started && <Board boardType="game" handleClick={ this.checkCell.bind(this) } board={ board }></Board> }

        <button className="startButton" disabled={ started } onClick={ this.startGame.bind(this) }>Start Battle</button>
      </section>
    )
  }
}

Interface.defaultProps = {
  gridSize: 3

}


export default Interface;
