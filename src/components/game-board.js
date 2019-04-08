import React from 'react';
import Square from './square';

const GameBoard = ({columns, rows, player, steps, reds}) => {

	//creates the board
	const createBoard = () => {
		let board = [];
		let index = 0;
		for(let i = 0; i < columns; i++){
		for(let j = 0; j < rows; j++){
			index++
			if(Math.ceil(Math.random()*10) === 5) {
				board.push(<Square key={index}
							   counter={index}
							   player={player}
							   reds={reds} />)
			}
			else {
				board.push(<Square key={index}
							   counter={index}
							   player={player}
							   reds={reds} />)
			}

			}
		}

		return board
	}

	return(
		<div className="game-board">
			{createBoard()}
			<p>Steps: {steps}</p>
		</div>
		)
}

export default GameBoard;