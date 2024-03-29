import  {createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    author: '',
    isToggleFavorites: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // I can mutate state thank for Immer library 
            state.title = action.payload;
            //I can also return new state as usually
            // return {...state, title: action.payload}
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },

        resetFilters: () => {
            return initialState
        },

        toggleFavorites: (state) => {
            state.isToggleFavorites =  !state.isToggleFavorites;
        }
    }
});

export const { setTitleFilter, resetFilters, setAuthorFilter, toggleFavorites } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectIsToggleFavorites = (state) => state.filter.isToggleFavorites;


export default filterSlice.reducer


