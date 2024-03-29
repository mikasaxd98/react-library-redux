import * as actionTypes from './actionTypes'

const initialState = [];

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_BOOK: 
        return [...state, action.payload];
        case actionTypes.REMOVE_BOOK: 
        return state.filter((item) => item.id !== action.payload);
        case actionTypes.ADD_FAVORITE_BOOK: 
        return state.map((item) => item.id === action.payload ? {...item, isFavorite: true} : item)
        case actionTypes.DELETE_FAVORITE_BOOK: 
        return state.map((item) => item.id === action.payload ? {...item, isFavorite: false} : item)
        default: 
        return state
    }
}

export default booksReducer;