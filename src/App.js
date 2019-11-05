import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PersonsTable from './Screens/PersonsTable';
import PersonsList from './Screens/PersonsList';
import About from './Screens/About';
import Home from './Screens/Home'
import './App.css';

class App extends Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route path='/list'>
						<PersonsList />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/table'>
						<PersonsTable />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}
export default App;
