import CustomNavbar from '../components/CustomNavbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import { FaCheckCircle, FaInfoCircle, FaRegStar, FaSearchPlus } from 'react-icons/fa'; // Icons for section
import aboutImage from '../assets/about-Udawalawa-Elegarden-Hotel.jpg';
import slider1 from '../assets/about-Udawalawa-Elegarden-Hotel-Hero.jpg'

function About() {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
     <>
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', width: '100vw', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">About Us</h1>
          <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
            Nestled near the heart of Udawalawe, our hotel blends comfort, charm, and nature to create unforgettable stays for every guest.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Container>
          <Row className="mb-4 manual_text_left">
            <Col xs={12} md={6}>
              <h2 className='fw-bold text-primary-emphasis' data-aos="zoom-in" data-aos-delay="200">About Udawalawa Elegarden Hotel</h2>
              <p data-aos="flip-up" data-aos-delay="300">
                Nestled in the heart of nature, Udawalawa Elegarden Hotel offers the perfect blend of comfort, convenience, and adventure. Whether you're here 
                to relax or explore, our hotel is your ideal getaway.
              </p>
              <p data-aos="flip-up" data-aos-delay="400">
                Enjoy our spacious and comfortable rooms, thoughtfully designed to make you feel at home. Savor delicious local and international cuisine at our 
                in-house restaurant, where every meal is crafted with care. For wildlife lovers, we offer guided Udawalawa Safari Tours, providing an unforgettable 
                chance to witness elephants and exotic animals in their natural habitat.
              </p>
              <p data-aos="flip-up" data-aos-delay="500">
                At Udawalawa Elegarden Hotel, your experience is our passion. Come as a guest—leave as family.
              </p>
            </Col>
            <Col xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
              <img
                src={aboutImage}
                alt="About Us"
                className="img-fluid rounded"
                style={{ cursor: 'pointer' }}
                onClick={handleOpen}
              />
              <p className="text-muted small text-center mt-2"><FaSearchPlus className="me-1" />Click to enlarge</p>
            </Col>
          </Row>

          <Modal show={showModal} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
              {/* <Modal.Title>Full Image</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <img src={aboutImage} alt="Full Size" className="img-fluid w-100" />
            </Modal.Body>
          </Modal>

          <section className="container py-5">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
              {/* Service Item */}
              <div className="col text-center" data-aos="zoom-in" data-aos-delay="100">
                <i className="bi bi-wifi fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Free Wi-Fi</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="200">
                <i className="bi bi-droplet-half fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Hot Water</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="300">
                <i className="bi bi-snow fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Air Conditioning</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="1000">
                <i className="bi bi-egg-fried fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">On-site Restaurant</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="900">
                <i className="bi bi-binoculars fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Safari Tours</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="600">
                <i className="bi bi-car-front fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Free Parking</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="700">
                <i className="bi bi-house-door fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Private Entrance</p>
              </div>

              <div className="col text-center" data-aos="zoom-in" data-aos-delay="800">
                <i className="bi bi-people fs-1 text-warning"></i>
                <p className="mt-2 text-muted small">Family Rooms</p>
              </div>
            </div>
          </section>

          <Row className="mb-4">
            <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="text-center">
                <Card.Body>
                  <FaCheckCircle size={50} color="#007BFF" />
                  <Card.Title className='text-primary-emphasis'>Quality Service</Card.Title>
                  <Card.Text>
                    We prioritize quality in everything we do to ensure our customers have the best experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="400">
              <Card className="text-center">
                <Card.Body>
                  <FaInfoCircle size={50} color="#28A745" />
                  <Card.Title className='text-primary-emphasis'>Experienced Team</Card.Title>
                  <Card.Text>
                    Our team has years of experience, ensuring your every need is met with expertise and care.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="600">
              <Card className="text-center">
                <Card.Body>
                  <FaRegStar size={50} color="#FFC107" />
                  <Card.Title className='text-primary-emphasis'>Customer Satisfaction</Card.Title>
                  <Card.Text>
                    We are committed to providing exceptional service and ensuring every customer is satisfied.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Call to Action */}
          <div className="cta-section text-center">
            <h3 className='fw-bold text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Ready to Experience the Best?</h3>
            <p data-aos="fade-up" data-aos-delay="400">Join us for an unforgettable experience. Book a tour with us today!</p>
            <Button className='btn-warning text-dark fw-bold' href="/contact#book_now" data-aos="fade-up" data-aos-delay="600">Book Now</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;

