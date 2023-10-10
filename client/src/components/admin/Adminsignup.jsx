import React from 'react'
import Button from 'react-bootstrap/esm/Button'

import Form from 'react-bootstrap/Form'

const Adminsignup = () => {
  return (
    <div className='simple-form'>
    <Form > 

    <Form.Group className="mb-3" controlId="formBasicName">
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

  <Form.Group className="mb-3" controlId="formBasicCategory" >
    <Form.Label>Category</Form.Label>
  <Form.Select>
  
      <option value="1">Catering</option>
      <option value="2">Florist</option>
      <option value="3">Decoration</option>
      <option value="4">Lighting</option>
    </Form.Select>
  </Form.Group>

 


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 

<p>Login Here Admin</p>
<Button path="/adminlogin">Login</Button>
</div>
  )
}

export default Adminsignup