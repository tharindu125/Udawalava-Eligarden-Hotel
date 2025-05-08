// src/components/CustomNavbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo - 1.png'; 

function CustomNavbar() {
  const location = useLocation();

  // Helper function to set active class
  const getNavLinkClass = (path) =>
    location.pathname === path ? 'fw-bold text-primary' : '';

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>

        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Udawalawa Elegarden Hotel"
          />{' '}
          Udawalawa Elegarden Hotel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className={getNavLinkClass('/')}>Home</Nav.Link>
            <Nav.Link href="/about" className={getNavLinkClass('/about')}>About</Nav.Link>
            <Nav.Link href="/contact" className={getNavLinkClass('/contact')}>Contact</Nav.Link>
            <Nav.Link href="/RoomDetails" className={getNavLinkClass('/RoomDetails')}>Room Details</Nav.Link>
            <Nav.Link href="/Restaurant" className={getNavLinkClass('/Restaurant')}>Restaurant</Nav.Link>
            <Nav.Link href="/Gallery" className={getNavLinkClass('/Gallery')}>Gallery</Nav.Link>

            <div className="ms-3">
              <a href="/#book_now" className="btn btn-primary">Book Now</a>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
