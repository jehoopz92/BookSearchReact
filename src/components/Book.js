import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBook } from '../store/actions/bookActions';

class Book extends Component {
	state = {
		books: []
	};
	componentDidMount() {
		this.props.fetchBook(this.props.match.params.id);
		this.props.fetchVideo(this.props.match.params.id);
	}
	// componentWillReceiveProps(props) {
	// 	if(props.movies.length > 0) {
	// 		console.log(props.movies)
	// 		this.setState({ movies: props.movies})
	// 		this.props.history.push()
	// 	}
	// }
	render() {
		return <div>Hi</div>;
	}
}

Book.propTypes = {
	fetchBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	book: state.books.book,
	books: state.books.books,
	search: state.books.search
});

// const listColor = {
// 	backgroundColor: '#162530',
// 	width: '86%'
// };

// const accentColor = {
// 	backgroundColor: '#162530'
// };

// const accentColorBottom = {
// 	backgroundColor: '#162530',
// 	borderBottom: '2px solid white'
// };

// const custImg = {
// 	height: '50px',
// 	width: '50px',
// 	borderRadius: '50%'
// };

export default connect(
	mapStateToProps,
	{ fetchBook }
)(Book);
