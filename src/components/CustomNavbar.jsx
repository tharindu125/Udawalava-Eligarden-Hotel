// src/components/CustomNavbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>

        <Navbar.Brand href="/">
          <img
            src="/src/assets/logo.png"
            width="40" height="40"
            className="d-inline-block align-top"
            alt="Udawalawa Elegarden Hotel"
          />{' '}
          Udawalawa Elegarden Hotel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/RoomDetails">Room Details</Nav.Link>
            <Nav.Link href="/Restaurant">Restaurant</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
