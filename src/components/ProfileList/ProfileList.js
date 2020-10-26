import React, {Component} from 'react';
import './ProfileList.css';
import faker from 'faker';

// Components
import ProfileCard from '../ProfileCard/ProfileCard';

class ProfileList extends Component {
	render() {
		return (
			<div className="profileList">
				<div className="profileList__card">
					<ProfileCard />
				</div>
				<div className="profileList__card">
					<ProfileCard />
				</div>
				<div className="profileList__card">
					<ProfileCard />
				</div>
				<div className="profileList__card">
					<ProfileCard />
				</div>
				<div className="profileList__card">
					<ProfileCard />
				</div><div className="profileList__card">
					<ProfileCard />
				</div>
				<div className="profileList__card">
					<ProfileCard />
				</div>
			</div>
		)
	}
}

export default ProfileList;