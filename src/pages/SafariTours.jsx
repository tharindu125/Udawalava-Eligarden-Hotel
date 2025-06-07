
import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';
// import { useState } from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";

function SafariTours() {
    const safariData = [
        {
            title: "Yala Safari",
            description: "Explore the wild side of Sri Lanka",
            subPackages: [
            { name: "Half-Day Safari", price: "$40", details: "Morning or Evening Safari" },
            { name: "Full-Day Safari", price: "$70", details: "Includes lunch + guide" },
            ],
        },
        {
            title: "Udawalawe Safari",
            description: "Home of the gentle giants",
            subPackages: [
            { name: "Morning Safari", price: "$35", details: "Best time to spot elephants" },
            { name: "Evening Safari", price: "$35", details: "Sunset view included" },
            ],
        },
    ];
    return (
        <>
            <CustomNavbar />

            {/* Hero Section */}
            <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
                <div className="hero-overlay">
                <h1 className="text-center text-white fw-bold">Udawalawe Safari Tours</h1>
                <p className="text-center text-white">Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.</p>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center mb-4">Safari Tour Packages</h2>
                <Accordion defaultActiveKey="0">
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
                </Accordion>
            </div>

        </>
    )
}

export default SafariTours;