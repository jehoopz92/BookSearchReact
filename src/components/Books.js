import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../store/actions/bookActions';
// import { Link } from 'react-router-dom';

class Books extends Component {
	state = {
		books: []
	};
	componentDidMount() {
		this.props.fetchBooks();
	}
	componentWillReceiveProps(props) {
		this.setState({ books: props.books });
	}
	render() {
		console.log(this.state.books);
		return (
			<React.Fragment>
				<div className='grid'>HI</div>
			</React.Fragment>
		);
	}
}

Books.propTypes = {
	fetchBooks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	books: state.books.books,
	search: state.books.search
});

export default connect(
	mapStateToProps,
	{ fetchBooks }
)(Books);
