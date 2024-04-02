import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = [];

export const fetchBook = createAsyncThunk(
    'books/fetchBook',
    async () => {
        const res = await axios.get('http://localhost:4000/random-book');
        console.log(res)
        return res.data;
    }
)

const booksSlice = createSlice({
  name: 'books',  
  initialState,
  reducers: {
    addBook: (state, action) => {
        return [...state, action.payload]
    },
    removeBook: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
    },
    addFavoriteBook: (state, action) => {
        return state.map((item) => item.id === action.payload ? {...item, isFavorite: true} : item)
    },
    deleteFavoriteBook: (state, action) => {
        return state.map((item) => item.id === action.payload ? {...item, isFavorite: false} : item)
    } 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
        if(action?.payload) {
            const data = {
                ...action.payload,
                isFavorite: false
               }
               state.push(data);
        }
    });
    builder.addCase(fetchBook.rejected, (state, action) => {

    })
  }
})

export const {addBook, removeBook, addFavoriteBook, deleteFavoriteBook} = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:4000/random-book')
        console.log(res);
        const data = {
         ...res.data,
         isFavorite: false
        }
 
        dispatch(addBook(data))
    } catch (error) {
        console.log('error')
    }
}

export const selectBooks = (state) => state.books;


export default booksSlice.reducer