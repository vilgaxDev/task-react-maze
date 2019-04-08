import React from 'react';
//checks if the square is either the player or a red square
const Square = ({ counter, player, reds }) => {
	return (
		<div className={ `${ counter === player ? "player" : "square"}
							${ reds.includes(counter) ? "reds" : ""}`}>
		</div>
		)
}

export default Square;