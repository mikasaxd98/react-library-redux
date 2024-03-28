import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './BookForm.css'
import { addBook } from '../../redux/books/actionCreators';
import { v4 as uuidv4 } from 'uuid';

function BookForm() {
   const [formData, setFormData] = useState({bookTitle: '',author: '', id: '' });
   const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();
console.log(formData);
        if(formData.bookTitle && formData.author) {
            dispatch(addBook(formData));
            setFormData({bookTitle: '',author: '', id: ''})
        }
    }
    
  return (
        <form className="bookForm" onSubmit={submitForm}>
            <label>
                Book title
                <input type="text" value={formData.bookTitle} onChange={(e) => setFormData({...formData, bookTitle: e.target.value, id: uuidv4()})}  placeholder="book title"/>
            </label>
            <label>
                Book author
                <input type="text" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value, id: uuidv4() })} placeholder="author"/>
            </label>
            <button type='submit'>Add Book</button>
        </form>
  )
}

export default BookForm