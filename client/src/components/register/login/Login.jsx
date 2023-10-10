import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'

const Login = () => {
  return (
    <div className='simple-form'>
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
        </div>
  )
}

export default Login