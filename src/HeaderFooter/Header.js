import React, { Component } from 'react';
import Divider from './Divider'
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {

	render() {
		return (
			<>
				<div className='header'>
					<div className='header-title'>
						{this.props.title}
					</div>
				</div>
				<Divider useFor={"header"}></Divider>
			</>
		);
	}
}
export default Header; 