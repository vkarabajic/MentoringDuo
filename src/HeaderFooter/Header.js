import React, { Component } from 'react';
import Divider from './Divider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class Header extends Component {

	render() {
		return (
			<>
				<div className='header'>
					<div className='header-title'>
						{this.props.title}
						{this.props.title === "Homepage" &&
							<Button
								outline
								color="primary"
								className="btn-notif">
								{this.props.notifications === undefined ? 0 : this.props.notifications}
							</Button>
						}
					</div>
				</div>
				<Divider useFor={"header"}></Divider>
			</>
		);
	}
}
export default Header; 