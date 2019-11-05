import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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