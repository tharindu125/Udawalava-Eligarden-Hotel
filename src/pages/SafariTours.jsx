
import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';
import image from '../assets/sri-lanka-leopard-asian.jpg'
// import { useState } from "react";
import { Accordion, Card, Button, ListGroup, Row, Col } from "react-bootstrap";

function SafariTours() {
    // const safariData = [
    //     {
    //         title: "Udawalawe Safari",
    //         description: "Home of the gentle giants",
    //         subPackages: [
    //         { name: "Morning Safari", price: "$35", details: "Best time to spot elephants" },
    //         { name: "Evening Safari", price: "$35", details: "Sunset view included" },
    //         ],

    //     },
    //     {
    //         title: "Yala Safari",
    //         description: "Explore the wild side of Sri Lanka",
    //         subPackages: [
    //         { name: "Half-Day Safari", price: "$40", details: "Morning or Evening Safari" },
    //         { name: "Full-Day Safari", price: "$70", details: "Includes lunch + guide" },
    //         ],
    //     },
    // ];
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
                {/* <Accordion defaultActiveKey="0">
                    {safariData.map((pkg, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{pkg.title}</Accordion.Header>
                        <Accordion.Body>
                        <p>{pkg.description}</p>
                        <ListGroup>
                            {pkg.subPackages.map((sub, i) => (
                            <ListGroup.Item key={i}>
                                <div className="d-flex justify-content-between">
                                <div>
                                    <strong>{sub.name}</strong> — {sub.details}
                                </div>
                                <span>{sub.price}</span>
                                </div>
                            </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <div className="mt-3 text-end">
                            <Button variant="success">Book This Tour</Button>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion> */}
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
                                <ListGroup.Item className='py-3'>
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

            </div>

        </>
    )
}

export default SafariTours;