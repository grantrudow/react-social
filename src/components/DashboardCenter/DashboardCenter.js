import React from 'react';
import './DashboardCenter.css'

function DashboardCenter(props) {
	return (
		<div className="dashboardCenter">
			{props.children}
		</div>
	)
}

export default DashboardCenter
