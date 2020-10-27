import React, {Component} from 'react';
import './ProfileCard.css';
import faker from 'faker';

// Redux

const ProfileCard = ({ name, email, id}) => {
	return (
		<div className="profileCard">
			<div>
				<img src={faker.image.avatar()} />
				<h1>{name}</h1>
				<h3>Frontend Developer</h3>
				<h5>{email}</h5>
			</div>
		</div>
	)
}

export default ProfileCard;