import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function NavScrollExample() {
  return (
    <Navbar bg='primary' variant="dark" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Brand Logo Here</Navbar.Brand> */}
        <Navbar.Brand>
            <LinkContainer to="/">
                <Nav.Link to={`/`}>Home</Nav.Link>
            </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="exams">
                <Nav.Link to={`exams`}>Exams</Nav.Link>
            </LinkContainer>
            <LinkContainer to="admin">
                <Nav.Link to={`admin`}>Admin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;