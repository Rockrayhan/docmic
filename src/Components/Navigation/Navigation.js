import React from 'react';
import './Navigation.css' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



const Navigation = () => {
    return (
        <div style={{marginBottom : '85px'}}>
         <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">Docmic.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='ms-5' id="basic-navbar-nav">
          <Nav className="ms-auto nav-text">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link className='ms-4 me-4' href="#link">About</Nav.Link>
            <Nav.Link href="#home">Department</Nav.Link>
            <Nav.Link className='ms-4 me-4' href="#link">Pages</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link className='ms-4 me-4' href="#link">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
            <Button className='p-3' variant="primary">Free Consultation</Button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;