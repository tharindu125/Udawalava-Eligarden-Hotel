// src/components/CustomNavbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo - 1.png'; 

function CustomNavbar() {
  const location = useLocation();

  // Helper function to set active class
  const getNavLinkClass = (path) =>
    location.pathname === path ? 'fw-bold text-warning-emphasis text-shadow' : '';

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
          <span className='fw-bold fs-4' style={{textShadow: '0 0 4px var(--bs-warning-text-emphasis)'}}>Udawalawa Elegarden Hotel</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className={`${getNavLinkClass('/')} fw-semibold`}>Home</Nav.Link>
            <Nav.Link href="/about" className={`${getNavLinkClass('/about')} fw-semibold`}>About</Nav.Link>
            <Nav.Link href="/contact" className={`${getNavLinkClass('/contact')} fw-semibold`}>Contact</Nav.Link>
            <Nav.Link href="/RoomDetails" className={`${getNavLinkClass('/RoomDetails')} fw-semibold`}>Room Details</Nav.Link>
            <Nav.Link href="/Restaurant" className={`${getNavLinkClass('/Restaurant')} fw-semibold`}>Restaurant</Nav.Link>
            <Nav.Link href="/SafariTours" className={`${getNavLinkClass('/SafariTours')} fw-semibold`}>Safari Tours</Nav.Link>
            <Nav.Link href="/Gallery" className={`${getNavLinkClass('/Gallery')} fw-semibold`}>Gallery</Nav.Link>

            <div className="ms-3">
              <a href="/#book_now" className="btn text-light" style={{background: '#664d03', boxShadow: '0 0 5px'}}>Book Now</a>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
