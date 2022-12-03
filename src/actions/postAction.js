import axios from "axios";

import {
    // FOR POST
    requestPost,
    postSuccess,
    postFailure,
    requestAddPost,
    addPostSuccess,
    addPostFailure,
    requestDeletePost,
    deletePostSuccess,
    deletePostFailure,

    // FOR COMMENTS
    requestDeleteComments,
    commentsDeleteSuccess,
    commentsDeleteFailure,

    // FOR ALERT
    requestAlert,
    deleteAlert,
} from "../Slicer/postSlicer";



export const getAllPosts = async (dispatch) => {
    if(!localStorage.getItem('token')) {
        dispatch(postFailure('please sing in'))
        return;
    } else {
        const token = localStorage.getItem('token');
        try {
            dispatch(requestPost());
            const res = await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post`, {
                headers: { Authorization: `Bearer ${token}`, },
            });
            dispatch(postSuccess(res.data.post));
        } catch (error) {
            dispatch(postFailure(error.message));
        }
                
    }
}

export const handleAddPost = async (payload, dispatch) => {
    payload.preventDefault();
    if(!localStorage.getItem('token')) {
        dispatch(addPostFailure('please sing in'))
        return;
    } else {
        const token = localStorage.getItem('token');
        const newPost = {
            postTitle: payload.target.title.value,
            postContent: payload.target.content.value,
            userID: localStorage.getItem('userId'),
            creator: localStorage.getItem('username'),
        };
        try {
            dispatch(requestAddPost());
            const res = await axios.post(`${process.env.REACT_APP_HEROKU_URL}/post`, newPost, {
                headers: { Authorization: `Bearer ${token}`, },
            }).then(() => {
                dispatch(addPostSuccess(res.data.post));
                dispatch(requestAlert());
                // setTimeout(() => {
                //     dispatch(deleteAlert());
                // }, 2000);
            })
        } catch (error) {
            dispatch(addPostFailure(error.message));
        }
    }
}

export const handlePostDelete = async (id, dispatch) => {
    if(!localStorage.getItem('token')) {
        dispatch(postFailure('please sing in'))
        return;
    } else {
        const userID = localStorage.getItem('userId'); 
        const token = localStorage.getItem('token');
        try {
            dispatch(requestDeletePost());
            await axios.delete(`${process.env.REACT_APP_HEROKU_URL}/post/${id}/${userID}`, {
                headers: { Authorization: `Bearer ${token}`, },
            });
            // dispatch(deletePostSuccess(res.data.post));
            dispatch(deletePostSuccess(id));
            dispatch(deleteAlert());
        } catch (error) {
            dispatch(deletePostFailure(error.message));
        }
                
    }
}
//////////////////////////
export const handleCommentDelete = async (id, dispatch) => {
    if(!localStorage.getItem('token')) {
        dispatch(commentsDeleteFailure('please sing in'))
        return;
    } else {
        const token = localStorage.getItem("token");

        try {
            dispatch(requestDeleteComments());
            await axios.delete(`${process.env.REACT_APP_HEROKU_URL}/comment/${id}`, {
                headers: { Authorization: `Bearer ${token}`, },
            });
            // dispatch(commentsDeleteSuccess(res.data.post));
            dispatch(commentsDeleteSuccess(id));

        } catch (error) {
            dispatch(commentsDeleteFailure(error.message));
        }
                
    }
}