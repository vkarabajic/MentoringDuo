import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col, Alert, FormFeedback } from 'reactstrap';

export default class About extends Component {

	constructor(props) {
		super(props)

		this.state = {
			toggle: false,
			validEmail: null,
			validUserName: null,
			validMessage: null
		};
	}

	render() {
		return (
			<div>
				<Header title={'Contact Us'} />
				<Container>
					<Row>
						<Col xs="4" />
						<Col>
							<Form style={{ margin: "30px 0px" }}>
								<FormGroup>
									<Label for="emailId">Email</Label>
									<Input type="email" name="email" id="emailId" placeholder="Dundie@is-the.best" valid={this.state.validEmail} invalid={!this.state.validEmail}
										onChange={(e) => {
											e.target.value.length > 0 ? this.setState({ validEmail: true }) : this.setState({ validEmail: false })
										}} />
								</FormGroup>
								<FormGroup>
									<Label for="usernameId">Username</Label>
									<Input type="username" name="username" id="usernameId" placeholder="Dundie 🔥" valid={this.state.validUserName} invalid={!this.state.validUserName}
										onChange={(e) => {
											e.target.value.length > 0 ? this.setState({ validUserName: true }) : this.setState({ validUserName: false })
										}} />
								</FormGroup>
								<FormGroup>
									<Label for="exampleId">Message</Label>
									<Input type="textarea" name="text" id="exampleId" placeholder="Please send us your message 😄" valid={this.state.validMessage} invalid={!this.state.validMessage}
										onChange={(e) => {
											e.target.value.length > 0 ? this.setState({ validMessage: true }) : this.setState({ validMessage: false })
										}} />
								</FormGroup>
							</Form>
							<Button block style={{ margin: "20px 0" }} onClick={() => { this.setState({ toggle: true }) }} color="primary">Submit</Button>
						</Col>
						<Col xs="4">
							<Alert color={
								this.state.validEmail &&
									this.state.validUserName &&
									this.state.validMessage ?
									"success" : "danger"
							} isOpen={this.state.toggle} toggle={() => {
								this.setState({ toggle: !this.state.toggle })
							}}>
								{this.state.validEmail &&
									this.state.validUserName &&
									this.state.validMessage ? "Form submited successfuly" : "All fields are required"}
							</Alert>
						</Col>
					</Row>
				</Container>
				<Footer redirectToHome={true} />
			</div>
		);
	}
}