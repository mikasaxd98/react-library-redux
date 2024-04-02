import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
  }
})

export const {addBook, removeBook, addFavoriteBook, deleteFavoriteBook} = booksSlice.actions;

export const selectBooks = (state) => state.books;


export default booksSlice.reducer