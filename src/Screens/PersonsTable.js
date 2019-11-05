import React, { Component } from "react";
import Persons from "../Persons/Persons";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Table } from 'reactstrap';

export default class PersonsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: Persons.data
		};
	}

	getPersonsInfo() {
		let people = this.state.persons.map(item => ({
			data: item
		}));
		return people;
	}

	render() {
		let people = this.getPersonsInfo();
		return (
			<div>
				<Header title={'Table'} />
				<div className="clearfix" style={{ padding: '20px 100px' }}>


					<Table bordered hover striped>
						<thead className="bg-infoCustom">
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Job Title</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{people.map((person, index) => (
								<tr>
									<th>{index + 1}</th>
									<td>
										{person.data.firstName}
									</td>
									<td>
										{person.data.lastName}
									</td>
									<td>
										{person.data.jobTitleName}
									</td>
									<td>
										{person.data.emailAddress}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					< Footer redirectToHome={true} routeName="about" />
				</div>
			</div>
		);
	}
}