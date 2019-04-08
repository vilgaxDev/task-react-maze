import React from 'react';
// Menu component where you set the columns and rows for the game
const Menu = ({columns, rows, handleSubmit, handleChange}) => {
	return (
		<div className="menu">
			<form onSubmit={handleSubmit}>
				<div className="input-field">
		          	<input
		          	name="columns"
		          	onChange={handleChange}
		          	value={columns}
		          	id="columns"
		          	type="number"
		          	min="7"
		          	max="20"
		          	className="validate"/>
		          	<label className="active" hmtlfor="columns">Columns</label>
	        	</div>
	        	<div className="input-field">
		          	<input
		          	name="rows"
		          	onChange={handleChange}
		          	value={rows}
		          	id="rows"
		          	type="number"
		          	min="7"
		          	max="20"
		          	className="validate"/>
		          	<label className="active" hmtlfor="rows">Rows</label>
	        	</div>
	        	<input className="btn" value="Start" type="submit"/>
			</form>
		</div>
		)
}

export default Menu;