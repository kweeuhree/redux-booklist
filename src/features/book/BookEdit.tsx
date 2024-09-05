import { useState } from 'react';
import type { FormEvent, SetStateAction, Dispatch } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { bookUpdated } from './bookSlice';
import type { Book } from './bookSlice';

type Props = {
    book: Book,
    setEdit: Dispatch<SetStateAction<boolean>>
}

const BookEdit = ({ book, setEdit }: Props) => {
    const [title, setTitle] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        dispatch(bookUpdated({id: book.id, title}));
        setTitle(''); 
        setEdit(false);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">New title:</label>
        <input type="text" placeholder='Enter new title' name="title" id="title" value={title} onChange={handleChange} required />
        <button type="submit">Submit</button>
    </form>
  )
}

export default BookEdit;