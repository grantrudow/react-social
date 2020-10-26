import React, {Component} from 'react';
import './ProfileCard.css';
import faker from 'faker';

// Redux

class ProfileCard extends Component {
	render() {
		return (
			<div className="profileCard">
				<div>
					<img src={faker.image.avatar()} />
					<h1>{faker.name.findName()}</h1>
					<h3>Frontend Developer</h3>
					<h5>{faker.internet.userName()}</h5>
				</div>
			</div>
		)
	}
}

export default ProfileCard;