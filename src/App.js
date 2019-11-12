import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import Navbar from './components/layout/Navbar';
import Main from './components/Main';
import Book from './components/Book';

import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter basename='/'>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Route exact path='/' render={Main} />
							<Route exact path='/books/:id' component={Book} />
						</div>
					</div>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
