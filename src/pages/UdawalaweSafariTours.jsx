

import { useState } from "react";
import { Accordion, Card, Button, ListGroup, Row, Col } from "react-bootstrap";
import { Modal, Carousel } from "react-bootstrap";

import CustomNavbar from '../components/CustomNavbar';

import slider1 from '../assets/slider1.jpg';
import udawalava01 from '../assets/sri-lanka-wild-life.jpg'
import udawalava02 from '../assets/sri-lanka-leopard-asian.jpg'
import udawalava03 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image09.jpg'
import udawalava04 from '../assets/Udawalava-Eligarden-Hotel-Wildlife-Adventures.jpg'
import udawalava05 from '../assets/Udawalava-Eligarden-Hotel-Safari.jpg'

function SafariTours() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const images = [udawalava01, udawalava02, udawalava03, udawalava04, udawalava05];

    const handlePackageClick = (pkg) => {
        setSelectedPackage(pkg);
        setShowModal(true);
    };

    return (
        <>
            <CustomNavbar />

            {/* Hero Section */}
            <div className="about-hero-section" style={{ position: 'relative', width: '100vw', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
                <div className="hero-overlay">
                    <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Udawalawe Safari Tours</h1>
                    <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
                        Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.
                    </p>
                </div>
            </div>

            <div className="container py-5 safari_tours">
                <h2 className="text-center mb-4 fw-bold display-6 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">Safari Tour Packages</h2>
                <p className='text-center mb-5' data-aos="flip-up" data-aos-delay="200">
                    Embark on an unforgettable journey through Udawalawa National Park with our guided safari tours. Spot elephants, leopards, birds, and more while enjoying safe, knowledgeable service and breathtaking views of nature.
                </p>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header  className="custom-accordion-header" data-aos="flip-up" data-aos-delay="200">Udawalawe Safari Tours</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mb-5 mt-2'>
                                <Col xs={12} md={6}>
                                    <p data-aos="fade-up" data-aos-delay="200">
                                        Udawalawe National Park is one of the most popular parks for easily spotting elephants. It is located along the boundary between the dry and wet zones of Sri Lanka, giving it rich biodiversity.
                                    </p>
                                    <p data-aos="fade-up" data-aos-delay="300">
                                        The park lies between the Uva and Sabaragamuwa provinces and is the third most visited national park in Sri Lanka. It covers an area of 30,821 hectares, including the Udawalawe reservoir.
                                    </p>
                                    <p data-aos="fade-up" data-aos-delay="400">
                                        This park is a paradise not only for elephants but also for a variety of birds, reptiles, amphibians, mammals, fish, wild cats, diverse plant species, and seasonal migratory birds.
                                    </p>
                                    <p data-aos="fade-up" data-aos-delay="500">
                                        You can even see the dwarf elephant in this forest — the only one of its kind found in South Asia.
                                    </p>
                                </Col>
                                <Col xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
                                    {/* <img src={image} className="img-fluid rounded" alt="Elephants at Udawalawe National Park" /> */}
                                    <Carousel
                                        interval={3000}       // Auto-play every 3 seconds
                                        indicators={true}     // Show dots
                                        controls={true}       // Show prev/next arrows
                                        pause="hover"         // Pause when mouse hovers
                                        slide                  // Optional: fade effect
                                        >
                                        {images.map((imgSrc, index) => (
                                            <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100 rounded"
                                                src={imgSrc}
                                                alt={`Slide ${index + 1}`}
                                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>

                            <ListGroup>
                                <p className='mb-1 text-warning-emphasis fw-semibold text-center'>Please click below packeges for more details</p>
                                <ListGroup.Item className='py-3' onClick={() => handlePackageClick({
                                    title: "Normal Safari Tours",
                                    duration: "3hr",
                                    capacity: "6 Persons",
                                    price: "12000",
                                    description: "Perfect for a quick elephant viewing experience."
                                    })} style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex justify-content-between">
                                        <div className="packege_details">
                                            <strong>Normal Safari Tours</strong> ( 3hr )
                                            
                                        </div>
                                        <Button className="text-light" style={{background:'#664d03', border:'none'}}>More Info</Button>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='py-3' onClick={() => handlePackageClick({
                                    title: "Half Day Safari Tours",
                                    duration: "6hr",
                                    capacity: "6 Persons",
                                    price: "20000",
                                    description: "Perfect for a quick elephant viewing experience."
                                    })} style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex justify-content-between">
                                        <div className="packege_details">
                                            <strong>Half Day Safari Tours</strong> ( 6hr )
                                        </div>
                                        <Button className="text-light" style={{background:'#664d03', border:'none'}}>More Info</Button>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='py-3' onClick={() => handlePackageClick({
                                    title: "Full Day Safari Tours",
                                    duration: "12hr",
                                    capacity: "6 Persons",
                                    price: "35000",
                                    description: "Perfect for a quick elephant viewing experience."
                                    })} style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex justify-content-between">
                                        <div className="packege_details">
                                            <strong>Full Day Safari Tours</strong> ( 12hr )
                                        </div>
                                        <Button className="text-light" style={{background:'#664d03', border:'none'}}>More Info</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <Row className="mt-4">
                                <div className="mt-4" data-aos="fade-up" data-aos-delay="300">
                                    <h5 className="text-success fw-bold mb-2 text-center">Included Facilities (All Tours)</h5>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>✅ Water & Snacks</ListGroup.Item>
                                    <ListGroup.Item>✅ Experienced Driver (Over 10 years of experience)</ListGroup.Item>
                                    <ListGroup.Item>✅ Guide Service</ListGroup.Item>
                                    <ListGroup.Item>✅ Comfortable Jeep (Max 6 persons)<br />
                                        <small className="text-muted">*Jeep price is fixed and does not vary based on the number of persons*</small>
                                    </ListGroup.Item>
                                    <ListGroup.Item>✅ Binocular Service</ListGroup.Item>
                                    <ListGroup.Item>✅ Optional Jungle Breakfast<br />
                                        <small className="text-muted">*On request, we can arrange breakfast facilities inside the jungle*</small>
                                    </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Row>
                            <div className="mt-3 text-end">
                                <Button variant="success" href="/contact#book_now">Book Your Tour</Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Seasonal Tours</Accordion.Header>
                        <Accordion.Body>
                            <p>Explore the wild side of Sri Lanka</p>
                            <ListGroup>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong>Half-Day Safari</strong> — Morning or Evening Safari
                                        </div>
                                        <span>$40</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong>Full-Day Safari</strong> — Includes lunch + guide
                                        </div>
                                        <span>$70</span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="mt-3 text-end">
                                <Button variant="success">Book Your Tour</Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Call to Action */}
                <div className="cta-section text-center">
                    <h3 className='fw-bold text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Ready to Experience the Best?</h3>
                    <p data-aos="fade-up" data-aos-delay="400">Join us for an unforgettable experience. Book a tour with us today!</p>
                    <Button variant="primary" href="/contact#book_now" data-aos="fade-up" data-aos-delay="600"                                        >Book Now</Button>
                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-primary-emphasis">{selectedPackage?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Duration :</strong> {selectedPackage?.duration}</p>
                        <p><strong>Capacity :</strong> {selectedPackage?.capacity}</p>
                        <p><strong>Price : </strong> Rs. {selectedPackage?.price}</p>
                        <p>{selectedPackage?.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant="success" href="/contact#book_now">
                            Book Now
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        </>
    )
}

export default SafariTours;