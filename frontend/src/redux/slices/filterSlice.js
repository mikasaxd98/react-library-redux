import  {createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: ''
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
        resetFilters: (state) => {
            return initialState
        }
    }
});

export const { setTitleFilter } = filterSlice.actions;
export const { resetFilters } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer


