import BookDisplay from "./BookDisplay"
import { useAppSelector } from '../../app/hooks'
import { selectBooks } from './bookSlice'

const BookList = () => {
    const books = useAppSelector(selectBooks);
    const renderedBooks = books.map((book) => <BookDisplay key={book.id} book={book} />);

  return (
        <div>{renderedBooks}</div>
  )
}

export default BookList;