import "./App.css"
import Header from "./features/Header"
import AddBook from "./features/book/AddBook"
import BookList from "./features/book/BookList"
import Message from "./features/message/Message"
import { selectBooksExist } from './features/book/bookSlice';
import { useAppSelector } from './app/hooks';

const header = "Book List";

const App = () => {
  const booksExist = useAppSelector(selectBooksExist);
  return (
    <div className="App">

      <div>
      <Header header={header} />
      <Message />
      <AddBook />    
      </div>

      { !booksExist ? (
           <p>Nothing to display yet</p>
        ) : (
          <BookList />
        ) }
    </div>
  )
}

export default App
