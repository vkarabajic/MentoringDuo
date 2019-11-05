import React, { Component } from 'react';

class Divider extends Component {

	render() {

		return (
			<div className={`${this.props.useFor}-div-divider`}>
				<div className={`${this.props.useFor}-divider`}></div>
			</div>
		);
	}
}
export default Divider;