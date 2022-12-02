import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import { useAuth } from "../context/AuthContext";
import { useSelector } from 'react-redux'
// import { FiSend } from "react-icons/fi";

import {
  // IconButton,
  // useColorMode,
  VStack,
  // Heading,
  // useToast,
} from "@chakra-ui/react";

function AddCommentForm(props) {
  // const { userData } = useAuth();
  const { user } = useSelector(state => state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userID = user.userId;
    const newComment = {
      comment: e.target.comment.value,
    };
    await axios
      .post(
        `${process.env.REACT_APP_HEROKU_URL}/comment/${props.postID}/${userID}`,
        newComment
      )
      .then(() => {
        props.getAllPosts();
        e.target.comment.value = "";
      });
  };

  return (
    <VStack p="2em">
      <Form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#61C0BF",
          padding: "5em",
          borderRadius: "1em",
          width: "40em",
        }}
      >
        <Form.Group id="comment">
          <Form.Label>Write Comment Here</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Comment"
            name="comment"
            required
          />
        </Form.Group>
        <br></br>
        {/* Add Comment */}
        {/* <IconButton
        colorScheme="teal"
        aria-label="Add Comment"
        icon={<FiSend />}
        onClick={{handleSubmit}}
        alignSelf="flex-end"
      /> */}

        <Button variant="success" type="submit">
          Add Comment
        </Button>
      </Form>
    </VStack>
  );
}

export default AddCommentForm;
