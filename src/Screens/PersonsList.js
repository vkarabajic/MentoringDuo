import React, { Component } from "react";
import Persons from "../Persons/Persons";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

export default class PersonsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: Persons.data
		};
	}

	getPersonsInfo() {
		let persons = this.state.persons.map(item => ({
			data: item
		}));
		return persons;
	}

	render() {
		let person = this.getPersonsInfo();
		return (
			<>
				<Header title={'Homepage'} />
				{person.map(item =>
					<li
						key={item.data.userId}
						item={item.data.firstName}
						className={"list"}
					>
						{item.data.firstName}
					</li>
				)}
				< Footer redirectToHome={true} routeName='table' />
			</>
		);
	}
}