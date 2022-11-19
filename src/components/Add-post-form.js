import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import { usePost } from "../context/PostContext";

import {
  // IconButton,
  // useColorMode,
  VStack,
  Heading,
  // useToast,
} from "@chakra-ui/react";

function AddPostForm() {
  const { addAlert, setAddAlert, handleSubmit } = usePost();

  return (
    <VStack p="3em">
      {/* <h2>Enter Your Post Items Here!</h2> */}
      <Heading as="h4" size="md">
        Enter Your Post Here
      </Heading>
      <Form onSubmit={handleSubmit} style={{ width: "50rem" }}>
        <Stack gap={3}>
          <Form.Group id="title">
            {/* <Form.Label>Post Title</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Enter Title"
              id="title"
              required
            />
          </Form.Group>

          <Form.Group id="content">
            {/* <Form.Label>Post content</Form.Label> */}
            <Form.Control
              type="text"
              as="textarea"
              rows={5}
              placeholder="Enter Post Contents"
              id="content"
              required
            />
          </Form.Group>

          {addAlert && (
            <Alert
              key="strong"
              variant="success"
              onClose={() => setAddAlert(false)}
              dismissible
            >
              Post has been Added successfully!
            </Alert>
          )}

          <Button
            variant="outline-dark"
            type="submit"
            style={{ backgroundColor: "#FFB6B9" }}
          >
            Submit
          </Button>

          <br></br>
          {/* <p>---------------------------------------------------------------------------------------------------------------------</p> */}
          <hr></hr>
        </Stack>
      </Form>
    </VStack>
  );
}

export default AddPostForm;
