import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    post: [],
    comments: [],
    loading: false,
    error: null,
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // FOR POST
        requestPost: (state) => {
            state.loading = true;
        },
        postSuccess: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        postFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // FOR COMMENTS
        requestComments: (state) => {
            state.loading = true;
        },
        commentsSuccess: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        commentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    requestPost,
    postSuccess,
    postFailure,
    requestComments,
    commentsSuccess,
    commentsFailure,
} = postSlice.actions;

export default postSlice.reducer;
