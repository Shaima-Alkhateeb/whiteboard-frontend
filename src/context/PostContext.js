import { createContext, useContext, useState } from "react";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

export const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [addAlert, setAddAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const { userData } = useAuth();

  const getAllPosts = async () => {
    const allPosts = await axios.get(
      `${process.env.REACT_APP_HEROKU_URL}/post`,
      {
        headers: {
          Authorization: `Bearer ${userData.user.token}`,
        },
      }
    );
    setPosts(allPosts.data.post);
  };

  const handlePostDelete = async (id) => {
    const userID = userData.user.userId;
    await axios.delete(
      `${process.env.REACT_APP_HEROKU_URL}/post/${id}/${userID}`,
      {
        headers: {
          Authorization: `Bearer ${userData.user.token}`,
        },
      }
    );
    getAllPosts();
    setDeleteAlert(true);
  };

  const handleCommentDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU_URL}/comment/${id}`, {
      headers: {
        Authorization: `Bearer ${userData.user.token}`,
      },
    });
    getAllPosts();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      postTitle: e.target.title.value,
      postContent: e.target.content.value,
      userID: userData.user.userId,
      creator: userData.user.username,
    };
    await axios
      .post(`${process.env.REACT_APP_HEROKU_URL}/post`, newPost, {
        headers: {
          Authorization: `Bearer ${userData.user.token}`,
        },
      })
      .then(() => {
        getAllPosts();
        setAddAlert(true);
      });
  };

  const value = {
    posts,
    addAlert,
    setAddAlert,
    deleteAlert,
    setDeleteAlert,
    getAllPosts,
    handlePostDelete,
    handleCommentDelete,
    handleSubmit,
  };

  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
};

export default PostContextProvider;
