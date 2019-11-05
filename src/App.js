import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import PersonsTable from './Screens/PersonsTable';
import PersonsList from './Screens/PersonsList';
import Home from './Screens/Home'

class App extends Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route path='/list'>
						<PersonsList />
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
