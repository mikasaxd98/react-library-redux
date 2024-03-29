import { useSelector, useDispatch } from "react-redux";
import { removeBook, addFavoriteBook, deleteFavoriteBook } from "../../redux/books/actionCreators";
import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import './BookList.css'

function BookList() {
  const books = useSelector((state) =>  state.books);
  const dispatch = useDispatch();

  const removeBookHandler = (id) => {
     dispatch(removeBook(id))
  }

  const addFavorite = (id) => {
    dispatch(addFavoriteBook(id))
  }

  const removeFavorite = (id) => {
    dispatch(deleteFavoriteBook(id))
  }

  return (
    <div>{books?.length ? 
    (<ul>
      {books.map((item, idx) => <li key={item.id}><span>{`${item.author}-${item.bookTitle}`}</span> 
      { !item.isFavorite 
      ? <BsBookmarkStar className="favourite" onClick={() => addFavorite(item.id)}/> 
      : <BsBookmarkStarFill className="favourite" onClick={() => removeFavorite(item.id)}/>}
      <button className="btn-remove" onClick={() => removeBookHandler(item.id)}>remove</button></li>)}
      </ul>) : (
        <p>no items</p>
      )
      }</div>
  )
}


export default BookList