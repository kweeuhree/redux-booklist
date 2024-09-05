import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface Book {
  id: number, 
  title: string
}

export interface BookListSliceState {
  books: Book[],
  error: string
}

const initialState: BookListSliceState = {
  books: [],
  error: ''
}; 

export const bookSlice = createAppSlice({
  name: "booklist",
  // Provide the slice name if needed
  initialState,
  reducers: {
    newBookAdded: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    bookDeleted: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    bookUpdated: (state, action: PayloadAction<{ id: number; title: string }>) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, title: action.payload.title };
        }
        return book;
      });
    }
  }
});

// Action creators are generated for each case reducer function.
export const { newBookAdded, bookUpdated, bookDeleted } = bookSlice.actions;

// Selectors
// Adjust these based on how your store is structured
// Adjust the selector to match the state shape
export const selectBooks = (state: { bookList: BookListSliceState }) => state.bookList.books;
export const selectBooksExist = (state: { bookList: BookListSliceState }) => state.bookList.books.length > 0;


// Default export of the reducer to be used in the store
export default bookSlice.reducer;