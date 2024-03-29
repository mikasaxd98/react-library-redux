import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../../redux/books/actionCreators";

function BookList() {
  const books = useSelector((state) =>  state.books);
  const dispatch = useDispatch();

  const removeBookHandler = (id) => {
     dispatch(removeBook(id))
  }

  return (
    <div>{books?.length ? 
    (<ul>
      {books.map((item, idx) => <li key={item.id}><span>{`${item.author}-${item.bookTitle}`}</span> <button className="btn-remove" onClick={() => removeBookHandler(item.id)}>remove</button></li>)}
      </ul>) : (
        <p>no items</p>
      )
      }</div>
  )
}


export default BookList