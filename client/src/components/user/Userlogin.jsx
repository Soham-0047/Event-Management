import React from "react";
import Button from 'react-bootstrap/esm/Button'

import Form from 'react-bootstrap/Form'




const Userlogin = () => {
  return (
    <div className="simple-form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p> Sign Up here User</p>
      <Button path="signupuser">Sign Up</Button>
    </div>
  );
};

export default Userlogin;
