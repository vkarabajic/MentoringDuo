import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default class About extends Component {
<<<<<<< HEAD

=======
	constructor(props) {
		super(props);

	}
>>>>>>> fcef458d37a8479e432c23d62113a270438c7cdf

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
									<Input type="email" name="email" id="emailId" placeholder="Dundie@is-the.best" />
								</FormGroup>
								<FormGroup>
									<Label for="usernameId">Username</Label>
									<Input type="username" name="username" id="usernameId" placeholder="Dundie 🔥" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleId">Message</Label>
									<Input type="textarea" name="text" id="exampleId" placeholder="Please send us your message 😄" />
								</FormGroup>
								<Button block style={{ margin: "20px 0" }} color="primary">Submit</Button>
							</Form>
						</Col>
						<Col xs="4" />
					</Row>
				</Container>
				<Footer redirectToHome={true} />
			</div>
		);
	}
}