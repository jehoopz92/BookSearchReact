/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBook } from '../../store/actions/bookActions';
import Books from '../../assets/books.png';

class Navbar extends Component {
	state = {
		searchTerm: ''
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.searchBook(this.state.searchTerm);
		this.setState({ searchTerm: '' });
	};

	render() {
		return (
			<nav className='navbar navbar-expand-lg' style={navColor}>
				<div className='container'>
					<Link to='' className='navbar-brand text-white'>
						BookSearchApp
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<i className='fas fa-bars text-white'></i>
					</button>

					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item active'>
								<a className='nav-link' href='#'>
									<img src={Books} alt='Books' style={img} />{' '}
									<span className='sr-only'>(current)</span>
								</a>
							</li>
						</ul>
						<form className='form-inline my-2 my-lg-0' onSubmit={this.onSubmit}>
							<input
								type='text'
								name='searchTerm'
								className='form-control mr-sm-2'
								placeholder='Search Books...'
								aria-label='Search'
								value={this.state.searchTerm}
								onChange={this.onChange}
							/>
							<button type='submit' className='btn my-2 my-sm-0 btn-outline-secondary'>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

const navColor = {
	backgroundColor: '#051d2c',
	width: '100%',
	color: '#fff'
};

const img = {
	width: '30px'
};

Navbar.propTypes = {
	searchBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	search: state.books.search
});

export default connect(
	mapStateToProps,
	{ searchBook }
)(Navbar);
