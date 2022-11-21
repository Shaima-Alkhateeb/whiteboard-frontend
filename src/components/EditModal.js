import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

import { MdEdit } from "react-icons/md";

import {
  IconButton,
  // useColorMode,
  // VStack,
  // Heading,
  // useToast,
} from "@chakra-ui/react";

function EditModal(props) {
  const { userData } = useAuth();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = async (e, id) => {
    e.preventDefault();
    const updatedPost = {
      postTitle: e.target.editTitle.value,
      postContent: e.target.editContent.value,
      userID: userData.user.userId,
      creator: userData.user.username,
    };

    await axios.put(
      `${process.env.REACT_APP_HEROKU_URL}/post/${id}`,
      updatedPost,
      {
        headers: {
          Authorization: `Bearer ${userData.user.token}`,
        },
      }
    );
    props.getAllPosts();
    handleClose();
  };

  return (
    <div>
      {/* Edit Post         */}
      <IconButton
        colorScheme="teal"
        aria-label="Edit Post"
        icon={<MdEdit />}
        onClick={handleShow}
        alignSelf="flex-end"
        fontSize="25px"
      />

      <Modal show={show} onHide={handleClose} style={{color:'#61C0BF'}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={(e) => handleEdit(e, props.post.id)}>
            <Form.Group>
              <Form.Label>Post Title: </Form.Label>
              <Form.Control
                type="text"
                autoFocus
                defaultValue={props.post.postTitle}
                name="editTitle"
                required
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <Form.Label>Post Content: </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                defaultValue={props.post.postContent}
                name="editContent"
                required
              />
            </Form.Group>

            <Modal.Footer>
              {/* <IconButton
                colorScheme="teal"
                aria-label="Edit Post"
                icon={<MdEdit />}
                onClick={handleShow}
                alignSelf="flex-end"
                fontSize="25px"
              /> */}

              <Button variant="outline-success" type="submit">
                Save Changes
              </Button>
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditModal;
