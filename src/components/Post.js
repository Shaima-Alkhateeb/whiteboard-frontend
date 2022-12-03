import React, { useEffect } from "react";
import AddPostForm from "./Add-post-form";
import AddCommentForm from "./Add-comment-form";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Alert from "react-bootstrap/Alert";
import EditModal from "./EditModal";

// import { usePost } from "../context/PostContext";
// import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux"; 
import { getAllPosts, handlePostDelete, handleCommentDelete } from "../actions/postAction";


import { MdDelete } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
// import { MdEdit } from "react-icons/md";

import '../index.css';

import {
  IconButton,
  // useColorMode,
  VStack,
  HStack,
  // Heading,
  // useToast,
  Spacer,
} from "@chakra-ui/react";

// const getAllPosts =getAllPosts()

function Post() {
  // const {
  //   deleteAlert,
  //   setDeleteAlert,
  //   posts,
  //   getAllPosts,
  //   handlePostDelete,
  //   handleCommentDelete,
  // } = usePost();
  // const { userData } = useAuth();
  const dispatch = useDispatch();

  const posts = useSelector(state => state.post.posts);
  const { user } = useSelector(state => state.auth);

  const userName =
    user.username.charAt(0).toUpperCase() +
    user.username.slice(1);

  useEffect(() => {
    getAllPosts(dispatch);
  }, [posts]);

  console.log('userName', userName)

  return (
    <VStack p="2em">
      {/* {deleteAlert && ( */}
        {/* <Alert
          key="strong"
          variant="success"
          onClose={() => handlePostDelete(value.id, dispatch)}
          dismissible
        >
          Post has been deleted successfully
        </Alert> */}
      {/* )} */}
      <AddPostForm />
      <div>
        {posts &&
          posts.map((value, idx) => {
            return (
              <div key={idx}>
                <Card
                  style={{
                    width: "50em",
                    backgroundColor: "#BBDED6",
                    margin: "2em",
                  }}
                >
                  <Card.Body>
                    {user.role === "admin" ||
                    user.userId === value.userID ? (
                      <HStack p="1em">
                        <Spacer />
                        {/* Edit Post         */}
                        <EditModal post={value} />
                        {/* Delete Post */}
                        <IconButton
                          colorScheme="teal"
                          aria-label="Delete Post"
                          icon={<TiDelete />}
                          onClick={() => handlePostDelete(value.id, dispatch)}
                          alignSelf="flex-end"
                          // borderRadius='50%'
                          fontSize="30px"
                        />
                      </HStack>
                    ) : null}

                    <Card.Title>
                      {value.creator.charAt(0).toUpperCase() +
                        value.creator.slice(1)}
                    </Card.Title>
                    <Card.Title>{value.postTitle}</Card.Title>
                    <Card.Text>{value.postContent}</Card.Text>
                  </Card.Body>

                  <AddCommentForm postID={value.id}  />

                  {value.Comments &&
                    value.Comments.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <Card
                            style={{
                              backgroundColor: "#61C0BF",
                              paddingLeft: "11em",
                              marginLeft: "5em",
                              borderRadius: "1em",
                              width: "40em",
                            }}
                          >
                            <Card.Body style={{ width: "18rem"}}>
                              <Card.Text>
                                {item.creator.charAt(0).toUpperCase() +
                                  item.creator.slice(1)}{" "}
                                : {item.comment}
                              </Card.Text>
                              <br></br>

                              {user.role === "admin" ? (
                                <div>
                                  {/* Delete Comment */}
                                  <IconButton
                                    colorScheme="teal"
                                    aria-label="Delete Comment"
                                    icon={<MdDelete />}
                                    onClick={() => handleCommentDelete(item.id, dispatch)}
                                    alignSelf="flex-end"
                                  />
                                </div>
                              ) : null}
                            </Card.Body>
                          </Card>
                          <br></br>
                        </div>
                      );
                    })}
                </Card>
              </div>
            );
          })}
      </div>
    </VStack>
  );
}

export default Post;
