import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'

const Register = () => {
  return (
    <>

    <div className='simple-form'>
        <Form > 

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>


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


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 

    <p>If already registered the login here</p>
    <Button path="/login">Login</Button>
    </div>
   
    </>
  )
}

export default Register