import { useSelector } from "react-redux"

function BookList() {
  const books = useSelector((state) =>  state.books);

  return (
    <div>{books?.length && 
    <ul>
      {books.map((item, idx) => <li key={idx}>{`${item.author}-${item.bookTitle}`}</li>)}
      </ul>
      }</div>
  )
}

export default BookList