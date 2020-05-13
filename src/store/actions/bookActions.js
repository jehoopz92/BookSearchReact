import { SEARCH_BOOK, FETCH_BOOKS, FETCH_BOOK } from "./types";
import axios from "axios";

export const fetchBooks = () => dispatch => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=stephen king&maxResults=20`
    )
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        payload: books.data.items
      })
    );
};

export const fetchBook = id => dispatch => {
  axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(book =>
    dispatch({
      type: FETCH_BOOK,
      payload: book.data
    })
  );
};

export const searchBook = searchTerm => dispatch => {
  axios
    .get(
      `
    https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyA7pon6ENf4NFF3vryJ7QPb7qNSjlwUafY&maxResults=20`
    )
    .then(search =>
      dispatch({
        type: SEARCH_BOOK,
        payload: search.data.items
      })
    );
};
