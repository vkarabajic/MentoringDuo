import React, { Component } from 'react';
import Persons from '../Persons/Persons';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header title={'About'} />
				About
				<Footer redirectToHome={true} />
			</div>
		);
	}
}