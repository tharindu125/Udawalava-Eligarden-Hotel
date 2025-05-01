import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          {/* Logo & Company Info */}
          <Col md={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                width="40"
                height="40"
                className="me-2"
              />
              <h5 className="mb-0">Udawalawa Eligarden Hotel</h5>
            </div>
            <p>Experience nature and comfort in the heart of Udawalawe. Perfect for your safari adventure and peaceful stay.</p>
          </Col>

          {/* Useful Links */}
          <Col md={4} className="mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Main Categories */}
          <Col md={4} className="mb-4">
            <h5>Main Categories</h5>
            <ul className="list-unstyled">
              <li>Luxury Rooms</li>
              <li>Safari Packages</li>
              <li>Local Cuisine</li>
            </ul>
            <h6 className="mt-3">Contact</h6>
            <p><FaEnvelope /> info@eligardenhotel.com</p>
            <p><FaPhone /> +94 71 123 4567</p>
            <div>
              <a href="#" className="text-light me-3"><FaFacebook /></a>
              <a href="#" className="text-light me-3"><FaInstagram /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center">© {new Date().getFullYear()} Udawalawa Eligarden Hotel. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
