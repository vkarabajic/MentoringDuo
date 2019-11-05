import React, { Component } from "react";
import Persons from "../Persons/Persons";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { ListGroup, ListGroupItem, Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
	}

	render() {
		const { currentPerson } = this.state
		let person = this.getPersonsInfo();

		return (
			<>
				<Header title={'Person List'} />
				<div className='list'>
					<h3
						className={'list-title'}>
						Person list
					</h3>
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

				{currentPerson.length > 0 &&
					<Container>
						{currentPerson.map(item =>
							<Table striped key={item.userId}>
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
					</Container>
				}
				< Footer
					redirectToHome={true}
					routeName='table' />
			</>
		);
	}
}