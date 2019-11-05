import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Button } from 'reactstrap';

export default class PersonsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notificationCount: 0,
		}
	}

	render() {

		return (

			<div className="home">
				<Header title={'Homepage'} notifications={this.state.notificationCount} />
				<div className="notifications">
					<h3>Send notifications</h3>
					<Button
						outline
						color="primary"
						size="lg"
						className="btn-notif"
						onClick={() =>
							this.setState({ notificationCount: this.state.notificationCount + 1 })
						}>
						Send
					</Button>
					<div className="home-users">
					</div>
				</div>
				<Footer redirectToHome={true} routeName='list' />
			</div>
		);
	}
}