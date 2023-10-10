import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';




const Navbartop = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand><Link to="/">EMS</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">


          

          <NavDropdown title="Vendor" id="basic-nav-dropdown">
<NavDropdown.Item> <Link to="vendorsignup">Vendor Signup</Link></NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item> <Link to="vendorlogin">Vendor Login</Link></NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="User" id="basic-nav-dropdown">
<NavDropdown.Item> <Link to="usersignup">User Signup</Link></NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item> <Link to="userlogin">User Login</Link></NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Admin" id="basic-nav-dropdown">
<NavDropdown.Item> <Link to="adminsignup">Admin Signup</Link></NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item> <Link to="adminlogin">Admin Login</Link></NavDropdown.Item>
          </NavDropdown>
          

         


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbartop