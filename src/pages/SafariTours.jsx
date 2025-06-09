

import { useState } from "react";
import { Accordion, Card, Button, ListGroup, Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import CustomNavbar from '../components/CustomNavbar';

import slider1 from '../assets/slider1.jpg';
import image from '../assets/sri-lanka-wild-life.jpg'

function SafariTours() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handlePackageClick = (pkg) => {
        setSelectedPackage(pkg);
        setShowModal(true);
    };

    return (
        <>
            <CustomNavbar />

            {/* Hero Section */}
            <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
                <div className="hero-overlay">
                    <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Udawalawe Safari Tours</h1>
                    <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
                        Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.
                    </p>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center mb-4 fw-bold display-6 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">Safari Tour Packages</h2>
                <p className='text-center mb-5' data-aos="flip-up" data-aos-delay="200">
                    Embark on an unforgettable journey through Udawalawa National Park with our guided safari tours. Spot elephants, leopards, birds, and more while enjoying safe, knowledgeable service and breathtaking views of nature.
                </p>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header data-aos="flip-up" data-aos-delay="200">Udawalawe Safari</Accordion.Header>
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
                                    <img src={image} className="img-fluid rounded" alt="Elephants at Udawalawe National Park" />
                                </Col>
                            </Row>

                            <ListGroup>
                                <p className='mb-1 text-warning-emphasis fw-semibold text-center'>Please click below packeges for more details</p>
                                <ListGroup.Item className='py-3' onClick={() => handlePackageClick({
                                    title: "Normal Safari Tours",
                                    duration: "3hr",
                                    capacity: "6 Persons",
                                    description: "Perfect for a quick elephant viewing experience."
                                    })} style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong>Normal Safari Tours</strong> ( 3hr / 6 Persons )
                                        </div>
                                        {/* <span>Rs:12000</span> */}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='py-3'>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong>Half Day Safari Tours</strong> ( 6hr / 6 Persons )
                                        </div>
                                        {/* <span>Rs:20000</span> */}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='py-3'>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong>Full Day Safari Tours</strong> ( 12hr / 6 Persons )
                                        </div>
                                        {/* <span>Rs:35000</span> */}
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
                                <Button variant="success">Book Your Tour</Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>seasonal Tours</Accordion.Header>
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

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPackage?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Duration:</strong> {selectedPackage?.duration}</p>
                        <p><strong>Capacity:</strong> {selectedPackage?.capacity}</p>
                        <p>{selectedPackage?.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                        </Button>
                        <Button variant="success">
                        Book Now
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        </>
    )
}

export default SafariTours;