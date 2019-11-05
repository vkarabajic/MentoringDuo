import React, { Component } from "react";
import Persons from "../Persons/Persons";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Table, Button, Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class PersonsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: Persons.data,
			numberOfRecords: Persons.data.length,
			displayedPerPage: 3,
			rowNumber: 0,
			toggle: false
		};

		this.paginationDown = this.paginationDown.bind(this)
		this.paginationUp = this.paginationUp.bind(this)
	}


	getPersonsInfo() {
		let { rowNumber, displayedPerPage } = this.state
		let people = this.state.persons.map(item => ({
			data: item
		}));
		return people.slice(rowNumber * displayedPerPage, (rowNumber + 1) * displayedPerPage);
	}


	paginationDown() {
		let { rowNumber } = this.state
		if (rowNumber !== 0) {
			rowNumber = rowNumber - 1;
			this.setState({ rowNumber })
		}
	}

	paginationUp() {
		let { rowNumber, numberOfRecords, displayedPerPage } = this.state
		let allowNext = numberOfRecords / (displayedPerPage * (rowNumber + 1));
		if (allowNext >= 1) {
			rowNumber = rowNumber + 1;
			this.setState({ rowNumber })
		}
	}

	setPagination = (a) => {
		let { displayedPerPage, rowNumber } = this.state
		displayedPerPage = a
		rowNumber = 0
		this.setState({ displayedPerPage, rowNumber })
	}



	render() {
		let people = this.getPersonsInfo();
		return (
			<>
				<Header title={'Table'} />
				<Container>


					<div className="clearfix" style={{ padding: '20px 100px' }}>

						<Row>
							<Col xs="9">
								<ButtonDropdown isOpen={this.state.toggle} toggle={() => {
									this.setState({ toggle: !this.state.toggle })
								}}>
									<DropdownToggle caret color="primary">
										Select Pagination
   					   </DropdownToggle>
									<DropdownMenu>
										<DropdownItem header>Select # of records shown in table</DropdownItem>
										<DropdownItem onClick={() => this.setPagination(3)}>3</DropdownItem>
										<DropdownItem onClick={() => this.setPagination(4)}>4</DropdownItem>
										<DropdownItem onClick={() => this.setPagination(5)}>5</DropdownItem>
									</DropdownMenu>
								</ButtonDropdown>
							</Col>
							<Col xs="1">
								<h3 style={{ marginLeft: "100%", marginTop: "10%" }}>{this.state.rowNumber + 1}</h3>
							</Col>
							<Col xs="2" style={{ alignItems: "right" }}>
								<Button color="primary" onClick={this.paginationDown} style={{ margin: '5px 10px' }}> {"<"} </Button>
								<Button color="primary" onClick={this.paginationUp}> {">"} </Button>
							</Col>
						</Row>
						<Table bordered hover striped>
							<thead className="bg-infoCustom">
								<tr>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Job Title</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								{people.map((person) => (
									<tr>
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

				</Container >
			</>
		);
	}
}