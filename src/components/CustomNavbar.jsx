// src/components/CustomNavbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        
        <Navbar.Brand href="/">
          <img
            src="/logo.png" // Replace with your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          Udawalava Eligarden Hotel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
