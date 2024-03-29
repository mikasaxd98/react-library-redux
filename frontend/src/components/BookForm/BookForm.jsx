import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './BookForm.css'
import { addBook } from '../../redux/books/actionCreators';
import { v4 as uuidv4 } from 'uuid';
import booksData from '../../data/books.json';

function BookForm() {
   const [formData, setFormData] = useState({bookTitle: '',author: '', id: '' });
   const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();
console.log(formData);
        if(formData.bookTitle && formData.author) {
            dispatch(addBook(formData));
            setFormData({bookTitle: '',author: '', id: '', isFavorite: false})
        }
    }

    const handleAddRandomBook = () => {
        const randomNumber = Math.floor(Math.random() * booksData.length);
        let randomBook = booksData[randomNumber];
        randomBook = {
            ...randomBook,
            isFavorite: false,
            id: uuidv4()
        }
        dispatch(addBook(randomBook));
        setFormData({bookTitle: '',author: '', id: '', isFavorite: false})
    }
    
  return (
        <form className="bookForm" onSubmit={submitForm}>
            <label>
                Book title
                <input type="text" value={formData.bookTitle} onChange={(e) => setFormData({...formData, bookTitle: e.target.value, id: uuidv4(), isFavorite: false})}  placeholder="book title"/>
            </label>
            <label>
                Book author
                <input type="text" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value, id: uuidv4(), isFavorite: false })} placeholder="author"/>
            </label>
            <button type='submit' className='btn-add'>Add Book</button>
            <button type='button' className='btn-add'onClick={handleAddRandomBook} >Add Book Random</button>
        </form>
  )
}

export default BookForm