import React, { Component } from "react";
import Persons from "../Persons/Persons";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { ListGroup, ListGroupItem, Container, Table } from 'reactstrap';

export default class PersonsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: Persons.data,
			currentPerson: {}
		};
	}

	getPersonsInfo() {
		let persons = this.state.persons.map(item => ({
			data: item
		}));
		return persons;
	}

	openDetails(id) {
		let selectedPerson = this.state.persons.filter(item =>
			(item.userId === id))
		this.setState({ currentPerson: selectedPerson })
		window.scroll({ top: 0, left: 0, behavior: 'smooth' })
	}

	render() {
		const { currentPerson } = this.state
		let person = this.getPersonsInfo();

		return (
			<>
				<Header title={'Person List'} />
				<Container>
					{currentPerson.length > 0 &&
						currentPerson.map(item =>
							<Table style={{ marginBottom: "20px" }} striped key={item.userId} bordered>
								<thead>
									<tr>
										<th>Full name</th>
										<th>Job title</th>
										<th>Region</th>
										<th>Phone number</th>
										<th>Email</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{item.preferredFullName}</td>
										<td>{item.jobTitleName}</td>
										<td>{item.region}</td>
										<td>{item.phoneNumber}</td>
										<td>{item.emailAddress}</td>
									</tr>
								</tbody>
							</Table>
						)}
					<div className='list' style={{ display: "block" }}>
						<ListGroup>
							<ListGroupItem
								active
								tag='button'
								disabled
								action>
								Click on person for more details
						</ListGroupItem>

							{person.map(item =>
								<ListGroupItem
									tag='a'
									key={item.data.userId}
									onClick={() => this.openDetails(item.data.userId)}
									action>
									{item.data.firstName + ' ' + item.data.lastName}
								</ListGroupItem>
							)}
						</ListGroup>
					</div>

					< Footer
						redirectToHome={true}
						routeName='table'
					/>
				</Container>
			</>
		);
	}
}