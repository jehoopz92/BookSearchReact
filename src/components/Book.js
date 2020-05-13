import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBook } from "../store/actions/bookActions";
import Stars from "simple-rating-stars";

class Book extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }
  // componentWillReceiveProps(props) {
  // 	if(props.movies.length > 0) {
  // 		console.log(props.movies)
  // 		this.setState({ movies: props.movies})
  // 		this.props.history.push()
  // 	}
  // }
  render() {
    if (this.props.book === undefined || this.props.book === 0) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.book);
      if (this.props.book.volumeInfo) {
        var image = this.props.book.volumeInfo.imageLinks.thumbnail;
        var title = this.props.book.volumeInfo.title;
        var pageCount = this.props.book.volumeInfo.printedPageCount;
        var date = new Intl.DateTimeFormat("en-US").format(
          new Date(this.props.book.volumeInfo.publishedDate)
        );
        var overview = this.props.book.volumeInfo.description.replace(
          /(<([^>]+)>)/gi,
          ""
        );

        var author = this.props.book.volumeInfo.authors.map(author => (
          <h6 key={this.props.book.selfLink}>By: {author}</h6>
        ));

        var cats = this.props.book.volumeInfo.categories.map(cat => (
          <h6 key={this.props.book.id}>{cat}</h6>
        ));

        var SomeStars = (
          <Stars
            stars={this.props.book.volumeInfo.averageRating}
            outOf={5}
            full={"#f2a80b"}
            empty={"#FFF"}
            stroke={"#f2a80b"}
          />
        );
      }

      if (this.props.book.saleInfo) {
        if (this.props.book.saleInfo.listPrice) {
          var listPrice = this.props.book.saleInfo.listPrice.amount;
        }
        if (this.props.book.saleInfo.retailPrice) {
          var retailPrice = this.props.book.saleInfo.retailPrice.amount;
        }
      }

      return (
        <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-center">
            <img src={image} alt="" srcSet={image} style={{ width: "55%" }} />
          </div>

          <div className="col-md-6">
            <h4>{title}</h4>
            {author}
            <hr style={{ borderColor: "#fff" }} />
            <div style={wrap}>
              <div style={box} className="mr-2">
                <h6>List Price</h6>
                <small>{listPrice || "No price available"}</small>
              </div>
              <div style={box}>
                <h6>Retail Price</h6>
                <small>{retailPrice || "No price available"}</small>
              </div>
            </div>

            <div className="info mt-4">
              <ul className="list-group">
                <li className="list-group-item" style={accentColor}>
                  Average Rating: {SomeStars}
                </li>
                <li className="list-group-item" style={accentColor}>
                  Categories: {cats}
                </li>
                <li className="list-group-item" style={accentColor}>
                  Page Count: {pageCount}
                </li>
                <li className="list-group-item" style={accentColor}>
                  Publish Date: {date}
                </li>
              </ul>
            </div>
          </div>
          <div className="jumbotron mt-5" style={accentColor}>
            <h5 className="text-center">Overview</h5>
            {overview}
          </div>
        </div>
      );
    }
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

const box = {
  border: "3px solid",
  borderColor: "#57BA98",
  width: "20%",
  padding: "1%",
  textAlign: "center"
};

const wrap = {
  display: "flex",
  justifyContent: "flex-start"
};

const accentColor = {
  backgroundColor: "#F2F2F2",
  color: "#333"
};

export default connect(mapStateToProps, { fetchBook })(Book);
