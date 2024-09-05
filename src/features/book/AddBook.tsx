import { useState } from 'react';
import { newBookAdded, selectBooks } from './bookSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { messageWithTimeout } from '../message/messageSlice';
import type { Book } from './bookSlice';

type ValidateProps = {
  books: Book[],
  bookInput: string
}

export const validate: ({ books, bookInput }: ValidateProps) => boolean = ({ books, bookInput }) => {
  const found = books.find((book) => book.title === bookInput);
  if(found) {
    return false;
  } else {
    return true;
  }
}

const AddBook = () => {
    const [ bookInput, setBookInput ] = useState('');
    const books = useAppSelector(selectBooks);
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBookInput(event.target.value);
      };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const validatedInput = validate({books, bookInput});
        if(validatedInput) {
          const newBook = {
            id: books.length + 1,
            title: bookInput
        }
          dispatch(newBookAdded(newBook));
        } else {
          dispatch(messageWithTimeout('Book with this title already exits'));
        }

        setBookInput('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='book-input'>Add new book:</label>
        <br />
        <input 
            type="text" 
            placeholder='Enter new book title' 
            id="book-input"
            value={bookInput}
            onChange={handleChange} 
            required/>
        <br />
        <button type="submit">Submit</button>
    </form>
  )
}

export default AddBook;