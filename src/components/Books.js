import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../store/actions/bookActions';
import { Link } from 'react-router-dom';

class Books extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    this.props.fetchBooks();
  }
  componentWillReceiveProps(props) {
    this.setState({ books: props.books });
  }
  render() {
    if (this.state.books.length > 0) {
      console.log('state', this.props.books);
      var bookItems = this.state.books.map((book) => (
        <div className='gridItems' key={book.selfLink}>
          <Link to={`books/${book.id}`}>
            <img
              src={
                book.volumeInfo.imageLinks.thumbnail ||
                book.volumeInfo.imageLinks.smallThumbnail
              }
              alt='Books'
              srcSet={
                book.volumeInfo.imageLinks.thumbnail ||
                book.volumeInfo.imageLinks.smallThumbnail
              }
            />
          </Link>
          <Link to={`books/${book.id}`}>
            <p>{book.volumeInfo.title}</p>
          </Link>
          <p>By: {book.volumeInfo.authors[0]}</p>
        </div>
      ));
    } else {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <div className='grid mt-5'>{bookItems}</div>
      </React.Fragment>
    );
  }
}

Books.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books.books,
  search: state.books.search,
});

export default connect(mapStateToProps, { fetchBooks })(Books);
