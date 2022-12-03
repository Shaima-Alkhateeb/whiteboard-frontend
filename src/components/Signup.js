import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

// import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from "../actions/authActions";

import { VStack, Heading } from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";

export default function Signup() {
  // const { userData, handleSignup } = useAuth();
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  return (
    <VStack p="3em">
      <Heading variant={['base', 'sm', 'md']} as="h2" size="xl">
        Sign Up
      </Heading>

      <Form onSubmit={(e) => signUp( dispatch, e)} style={{ width: "40em" }}>
        <Stack gap={4}>
          <Form.Group id="title">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              id="userName"
              autoComplete="username"
              required
            />
          </Form.Group>

          <Form.Group id="content">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              id="email"
              autoComplete="email"
              required
            />
          </Form.Group>

          <Form.Group id="content">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              id="password"
              autoComplete="new-password"
              required
            />
          </Form.Group>

          <Form.Group id="content">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              id="confirmPassword"
              autoComplete="new-password"
              required
            />
          </Form.Group>

          <Form.Group id="content">
            <Form.Label>Select Role</Form.Label>
            <Form.Select name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          {/* {userData.isPassword && (
            <Alert key="strong" variant="danger">
              The password does not match, Try again.
            </Alert>
          )} */}
          {error && 
            <Alert key="strong" variant="danger">
              {error}
            </Alert>
          }

          <Button variant="outline-success" type="submit">
            Sign Up
          </Button>

          <Heading as="h5" size="sm">
            Already have acount ? <a href="/signin">Sign in</a>
          </Heading>
        </Stack>
      </Form>
    </VStack>
  );
}
