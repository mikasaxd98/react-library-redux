import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import './BookList.css'
import { selectAuthorFilter, selectIsToggleFavorites, selectTitleFilter } from "../../redux/slices/filterSlice";
import { addFavoriteBook, deleteFavoriteBook, removeBook, selectBooks } from "../../redux/slices/booksSlice";

function BookList() {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authotFilter = useSelector(selectAuthorFilter);
  const isToggleFavorites = useSelector(selectIsToggleFavorites);
  let filteredBooks = books.filter((item) => {
    const matchesTitle = item.bookTitle.toLowerCase().includes(titleFilter);
    const matchesAuthor = item.author.toLowerCase().includes(authotFilter);
    const matchIsFavorite = isToggleFavorites ? item.isFavorite : true;
    return matchesTitle && matchesAuthor && matchIsFavorite;
  });

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
    <div>{filteredBooks?.length ? 
    (<ul>
      {filteredBooks.map((item, idx) => <li key={item.id}><span>{`${item.author}-${item.bookTitle}`}</span> 
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