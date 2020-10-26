import React, {Component} from 'react';
import './SidebarFilter.css';


class SidebarFilter extends Component {
	render() {
		return (
			<div className="sidebarFilter">
				<h1>Filter</h1>
				<div className="sidebarFilter__item">
					<a href="#">Filter Option</a>
				</div>
			</div>
		)
	}
}

export default SidebarFilter;