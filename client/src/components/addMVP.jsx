import React, { useState } from 'react';

function AddMVP() {
	const [number, setNumber] = useState(0);

	function handleClick() {
		setNumber(number + 1);
	}

	return (
		<div className='mvp-container'>
			<p>
				MVP's this season: <span data-testid='mvp'>{number}</span>
			</p>
			<button onClick={handleClick}>Add MVP</button>
		</div>
	);
}

export default AddMVP;
