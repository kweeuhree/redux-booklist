import { useState } from "react"
import type { Book } from './bookSlice';
import { useAppDispatch } from "../../app/hooks"
// import styles from "./Book.module.css"
import { bookDeleted } from "./bookSlice"
import BookEdit from "./BookEdit";
// import material ui
import ModeIcon from '@mui/icons-material/Mode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Props = {
  book: Book
}

const BookDisplay = ({ book }: Props) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();
  const display = edit ? <BookEdit book={book} setEdit={setEdit} /> : book.title;

  const handleEdit = () => {
    setEdit(true);
  }

  const handleDelete = () => {
    dispatch(bookDeleted(book.id));
  }

  return (
    <div>
      <div>{display}</div>
      <div>
        <ModeIcon onClick={handleEdit}/>
        <DeleteForeverIcon onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default BookDisplay;