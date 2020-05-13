import { FETCH_BOOKS, FETCH_BOOK, SEARCH_BOOK } from "../actions/types";

const initialState = {
  books: [],
  book: [],
  search: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    case FETCH_BOOK:
      return {
        ...state,
        book: action.payload
      };

    case SEARCH_BOOK:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
}
