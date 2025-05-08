import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="text-light pt-5 pb-4 manual_text_center" style={{ backgroundColor: 'rgb(0, 5, 27) ' }}>
      <Container>
        <Row>
          {/* Logo & Company Info */}
          <Col md={3} className="mb-4">
            <div className="align-items-center mb-3 ">
              <img
                src={logo}
                alt="Logo"
                width="100"
                height="100"
                className="me-2"
              />
              {/* <h5 className="mb-0">Udawalawa Eligarden Hotel</h5> */}
            </div>
            <p>Experience nature and comfort in the heart of Udawalawe. Perfect for your safari adventure and peaceful stay.</p>
          </Col>

          {/* Useful Links */}
          <Col md={3} className="mb-4">
            <h5 className='text-warning-emphasis'>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/RoomDetails" className="text-light text-decoration-none">Room Details</a></li>
              <li><a href="/Restaurant" className="text-light text-decoration-none">Restaurant</a></li>
              <li><a href="/Gallery" className="text-light text-decoration-none">Gallery</a></li>
            </ul>
          </Col>

          {/* Main Categories */}
          <Col md={3} className="mb-4">
            <h5 className='text-warning-emphasis'>Main Categories</h5>
            <ul className="list-unstyled">
              <li>Luxury Rooms</li>
              <li>Safari Packages</li>
              <li>Local Cuisine</li>
            </ul>
          </Col>
         
         {/* Contact Details */}
          <Col md={3} className="mb-4">
            <h5 className='text-warning-emphasis'>Contact Us</h5>
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
