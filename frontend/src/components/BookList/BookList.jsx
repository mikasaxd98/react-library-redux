import { useSelector } from "react-redux"

function BookList() {
  const books = useSelector((state) =>  state.books);

  return (
    <div>{books?.length ? 
    (<ul>
      {books.map((item, idx) => <li key={item.id}>{`${item.author}-${item.bookTitle}`}</li>)}
      </ul>) : (
        <p>no items</p>
      )
      }</div>
  )
}

export default BookList