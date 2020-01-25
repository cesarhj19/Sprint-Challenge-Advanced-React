import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AddGoals from './addGoals';
import AddMVP from './addMVP';

class Players extends Component {
	state = {
		players: []
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/players')
			.then(resp => {
				this.setState({ players: resp.data });
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Fragment>
				{this.state.players.map(player => {
					return (
						<div key={player.id} className='players-container'>
							<div className='player-content'>
								<h2>{player.name}</h2>
								<p>Country: {player.country}</p>
								<AddGoals />
								<AddMVP />
							</div>
						</div>
					);
				})}
			</Fragment>
		);
	}
}

export default Players;
