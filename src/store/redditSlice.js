import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: ''
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
})

export const {
    setSearchTerm
} = redditSlice.actions;

export default redditSlice.reducer;