import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../context/AuthContext";

import { VStack, Heading } from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";

export default function Signin() {
  const { userData, handleSignin } = useAuth();

  return (
    <VStack p="3em" m="3em">
      <Heading variant={['base', 'sm', 'md']} as="h2" size="xl">
        Sign In
      </Heading>

      <Form onSubmit={handleSignin}>
        <Stack gap={5}>
          <Form.Group id="title">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              id="userName"
              autoComplete="userName"
            />
          </Form.Group>

          <Form.Group id="content">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              id="password"
              autoComplete="current-password"
            />
          </Form.Group>

          {/* {userData.isNotLogged && (
            <Alert key="strong" variant="danger">
              You Are Not Authorized
            </Alert>
          )} */}
          {/* <br></br> */}
          <Button variant="outline-success" type="submit">
            Sign In
          </Button>
        </Stack>
        <br></br>

        <Heading as="h5" size="sm">
          You don't have an account? <a href="/signup">Sign up now</a>
        </Heading>
      </Form>
    </VStack>
  );
}
