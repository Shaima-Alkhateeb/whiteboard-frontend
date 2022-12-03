import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    post: [],
    comments: [],
    loading: false,
    error: null,
    addAlert: false,
    deleteAlert: false,
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
            // state.loading = false;
            state.post = action.payload;
        },
        postFailure: (state, action) => {
            // state.loading = false;
            state.error = action.payload;
        },
        requestAddPost(state) {
            state.loading = true;
        },
        addPostSuccess(state, action) {
            // state.loading = false;
            state.post = [...state.post, action.payload];
        },
        addPostFailure(state, action) {
            // state.loading = false;
            state.error = action.payload;
        },
        requestDeletePost(state) {
            state.loading = true;
        },
        deletePostSuccess(state, action) {
            // state.loading = false;
            state.post = state.post.filter((post) => post.id !== action.payload);
        },
        deletePostFailure(state, action) {
            // state.loading = false;
            state.error = action.payload;
        },

        // FOR COMMENTS
        requestDeleteComments (state) {
            state.loading = true;
        },
        commentsDeleteSuccess(state, action) {
            state.loading = false;
            state.comments = action.payload;
        },
        commentsDeleteFailure (state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        // FOR ALERT
        requestAlert (state) {
            // state.loading = true;
            state.addAlert = true;
        },
        deleteAlert (state) {
            // state.loading = false;
            state.deleteAlert = true;
        },
    },
});

export const {
    requestPost,
    postSuccess,
    postFailure,
    requestAddPost,
    addPostSuccess,
    addPostFailure,
    requestDeletePost,
    deletePostSuccess,
    deletePostFailure,
    requestDeleteComments,
    commentsDeleteSuccess,
    commentsDeleteFailure,
    requestAlert,
    deleteAlert,
} = postSlice.actions;

export default postSlice.reducer;
