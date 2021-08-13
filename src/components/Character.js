// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
color: black;
font-size: 1.5rem;
width: 60%;
display: flex;
margin auto;

justify-content: center;
align-items: center;
background-color: grey;
`

const Character = (props) => {
	return (
		<StyledCharacter>
			<div>
				<div><p>{props.character.name}</p></div>
				<div><p>{props.character.birth_year}</p></div>
			</div>
		</StyledCharacter>
	)
}
export default Character;