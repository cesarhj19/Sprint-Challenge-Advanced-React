import React, { useState } from 'react';

function AddGoals() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div className='goals-container'>
			<p>
				Goals Scored Current Season: <span data-testid='count'>{count}</span>
			</p>
			<button onClick={handleClick}>Add Goal</button>
		</div>
	);
}

export default AddGoals;
