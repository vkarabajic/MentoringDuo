import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Button, CarouselItem, UncontrolledCarousel, CarouselCaption } from 'reactstrap';

import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'


const items = [
	{
		src: img1,
		altText: 'Slide 1',
		caption: 'Slide 1'
	},
	{
		src: img2,
		altText: 'Slide 2',
		caption: 'Slide 2'
	},
	{
		src: img3,
		altText: 'Slide 3',
		caption: 'Slide 3'
	}
];

export default class PersonsList extends Component {
	constructor(props) {
		super(props);

		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);

		this.state = {
			notificationCount: 0,
			activeIndex: 0,

		}
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}


	render() {
		const { activeIndex } = this.state;


		const slides = items.map((item) => {
			return (
				<CarouselItem
					className="carouselImg"
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
				</CarouselItem>
			);
		});


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
				<div className="carousel">
					<UncontrolledCarousel items={items}></UncontrolledCarousel>
				</div>
				<Footer redirectToHome={true} routeName='list' />
			</div>
		);
	}
}