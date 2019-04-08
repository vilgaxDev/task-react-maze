import React from 'react';
import GameBoard from './game-board';

const Game = ({columns, rows, player, steps, board, reds, movePlayer }) => (
	<div className="game"
		ref={game => game && game.focus()}
		onKeyDown={movePlayer}
		tabIndex="0">
		<h2>kenbrian (vilgax)</h2>
		<h3>finish all green squares</h3>
		<GameBoard
		columns={columns}
		rows={rows}
		player={player}
		steps={steps}
		board={board}
		reds={reds} />
	</div>
	)

export default Game;