import React, {Component} from 'react';
import './ProfileList.css';
import faker from 'faker';

// Components
import ProfileCard from '../ProfileCard/ProfileCard';


const ProfileList = ({users}) => {

	return (
		<div className="profileList">
			{
				users.map((user, i) => {
					return (
						<div className="profileList__card">
							<ProfileCard
							key={i}
							id={users[i].id}
							name={users[i].name}
							email={users[i].email}
							/>
						</div>
						
					)
				})
			}
		</div>
	)
}

export default ProfileList;