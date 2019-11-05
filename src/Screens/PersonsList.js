import React, { Component } from "react";
import Persons from "../Persons/Persons";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';

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
				<Header title={'Person List'} />
				<Container className="list-container">
					<Row>
						<Col xs="6">
							<div className="list">
								<h3>
									Person list
									</h3>
								<ListGroup>
									<ListGroupItem active tag="button" disabled action >Click on person for more details</ListGroupItem>
									{person.map(item =>
										<ListGroupItem tag="a" key={item.data.userId} action>{item.data.firstName + ' ' + item.data.lastName}</ListGroupItem>
									)}
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Container>
				< Footer redirectToHome={true} routeName='table' />
			</>
		);
	}
}