import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './BookForm.css'
import { addBook } from '../../redux/books/actionCreators';

function BookForm() {
   const [formData, setFormData] = useState({bookTitle: '',author: '' });
   const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();

        if(formData.bookTitle && formData.author) {
            dispatch(addBook(formData));
            setFormData({bookTitle: '',author: ''})
        }
    }
    
  return (
        <form className="bookForm" onSubmit={submitForm}>
            <label>
                Book title
                <input type="text" value={formData.bookTitle} onChange={(e) => setFormData({...formData, bookTitle: e.target.value})}  placeholder="book title"/>
            </label>
            <label>
                Book author
                <input type="text" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value })} placeholder="author"/>
            </label>
            <button type='submit'>Add Book</button>
        </form>
  )
}

export default BookForm