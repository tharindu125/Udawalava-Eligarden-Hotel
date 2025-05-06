import CustomNavbar from '../components/CustomNavbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheckCircle, FaInfoCircle, FaRegStar } from 'react-icons/fa'; // Icons for section
import slider1 from '../assets/slider1.jpg';

function About() {
  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white">About Us</h1>
          <p className="text-center text-white">Learn more about our journey and services</p>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Container>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <h2>About Udawalawa Elegarden Hotel</h2>
              <p>
                Nestled in the heart of nature, Udawalawa Elegarden Hotel offers the perfect blend of comfort, convenience, and adventure. Whether you're here 
                to relax or explore, our hotel is your ideal getaway.
              </p>
              <p>
                Enjoy our spacious and comfortable rooms, thoughtfully designed to make you feel at home. Savor delicious local and international cuisine at our 
                in-house restaurant, where every meal is crafted with care. For wildlife lovers, we offer guided Udawalawa Safari Tours, providing an unforgettable 
                chance to witness elephants and exotic animals in their natural habitat.
              </p>
              <p>At Udawalawa Elegarden Hotel, your experience is our passion. Come as a guest—leave as family.</p>
            </Col>
            <Col xs={12} md={6}>
              <img src={slider1} alt="About Us" className="img-fluid rounded" />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaCheckCircle size={50} color="#007BFF" />
                  <Card.Title>Quality Service</Card.Title>
                  <Card.Text>
                    We prioritize quality in everything we do to ensure our customers have the best experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaInfoCircle size={50} color="#28A745" />
                  <Card.Title>Experienced Team</Card.Title>
                  <Card.Text>
                    Our team has years of experience, ensuring your every need is met with expertise and care.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaRegStar size={50} color="#FFC107" />
                  <Card.Title>Customer Satisfaction</Card.Title>
                  <Card.Text>
                    We are committed to providing exceptional service and ensuring every customer is satisfied.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Call to Action */}
          <div className="cta-section text-center">
            <h3>Ready to Experience the Best?</h3>
            <p>Join us for an unforgettable experience. Book a tour with us today!</p>
            <Button variant="primary" href="/contact#book_now">Book Now</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;

