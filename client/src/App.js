import React, { Fragment } from 'react';
import Players from './components/players';
import './App.css';

function App() {
	return (
		<Fragment>
			<h1 className='title'>Women's World Cup Player List</h1>
			<div className='App'>
				<Players />
			</div>
		</Fragment>
	);
}

export default App;
