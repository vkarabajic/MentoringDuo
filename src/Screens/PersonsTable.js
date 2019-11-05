import ReactDOM from "react-dom";
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
				<Header title={'Table'} />

				{person.map(item => (
					<table key={item.data.userId}>
						<tbody>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Job Title</th>
								<th>Email</th>
							</tr>
							<tr>
								<td>
									{item.data.firstName}
								</td>
								<td>
									{item.data.lastName}
								</td>
								<td>
									{item.data.jobTitleName}
								</td>
								<td>
									{item.data.emailAddress}
								</td>
							</tr>
						</tbody>
					</table>
				))}
				< Footer redirectToHome={true} />
			</>
		);
	}
}