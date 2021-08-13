// Write your Character component here
import React from 'react';

const Character = (props) => {
	return (
		<div>
			<div>{props.character.name}</div>
		</div>
	)
}
export default Character;