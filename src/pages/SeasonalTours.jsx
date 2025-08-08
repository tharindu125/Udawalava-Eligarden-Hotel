import { Card, Button, Row, Col } from "react-bootstrap";
import CustomNavbar from '../components/CustomNavbar';
// import { Helmet } from "react-helmet";

import seasonalHero from '../assets/Sigiriya-Leopard-in-Sri-Lanka-hero.jpg';
import whaleWatching from '../assets/Whale-Wathing.jpg';
import trincomaleeBeach from '../assets/trincomaleeBeach.jpg';
import arugambaySurf from '../assets/arugambaySurf.jpg';
import kumanaSafari from '../assets/Yala-National-Park.jpg';
import adamsPeak from '../assets/adamsPeak.jpg';


function SeasonalTours() {
    return (
        <>
            {/* <Helmet>
                <title>Seasonal Travel Tours | Udawalawe Elegarden Safari Resort</title>
                <meta name="description" content="Udawalawe Elegarden Safari Resort - Your perfect getaway in Udawalaww, Sri Lanka. Experience luxury, comfort, and nature." />
                <meta name="keywords" content="Udawalawe, Safari tours in Sri Lanka, Sri Lanka, luxury hotel, nature retreat, safari tours, accommodation, 
                    elephants, udawalawe safari Tours, Sri Lanka wildlife safari, Elephant safari Sri Lanka, Sri Lanka jeep safari, Best safari in Sri Lanka" />
            </Helmet> */}

            <CustomNavbar />

            {/* Hero Section */}
            <div
                className="about-hero-section"
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '400px',
                    background: `url(${seasonalHero}) no-repeat center center/cover`
                }}
            >
                <div className="hero-overlay">
                    <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">
                        Seasonal Tours in Sri Lanka
                    </h1>
                    <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
                        Explore Sri Lanka's best seasonal attractions, from ocean giants to sacred mountain trails.
                    </p>
                </div>
            </div>

            <div className=" py-5 safari_tours">
                <h2 className="text-center mb-4 fw-bold display-6 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">
                    Featured Seasonal Tours
                </h2>
                <p className='text-center mb-5' data-aos="flip-up" data-aos-delay="200">
                    Discover the best seasonal experiences Sri Lanka has to offer. From whale watching to pilgrimages, each tour is guided by local experts.
                </p>

                <Row>
                    {/* Whale Watching */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={whaleWatching} className="img-fluid rounded" alt="Whale Watching Tour" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Whale Watching & Boat Tours</h2>
                                    <p className="text-muted">Join our expert-led boat trips to witness blue whales, dolphins, and other marine life just off Sri Lanka’s southern coast. Best time: Nov to April.</p>
                                    <Button href="/#book_now" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Trincomalee Beaches */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={trincomaleeBeach} className="img-fluid rounded" alt="Trincomalee Beach" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Trincomalee - Marble & Nilaveli Beach</h2>
                                    <p className="text-muted">Relax on soft sandy beaches and snorkel in the crystal-clear waters of Nilaveli and Marble Beach. Ideal during the east coast season: May to September.</p>
                                    <Button href="/#book_now" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Arugambay Surfing */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={arugambaySurf} className="img-fluid rounded" alt="Arugambay Surfing" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Arugambay Surf & Chill</h2>
                                    <p className="text-muted">Catch waves at Sri Lanka’s top surf destination and enjoy the beach lifestyle. Season: April to October.</p>
                                    <Button href="/#book_now" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Kumana Safari */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={kumanaSafari} className="img-fluid rounded" alt="Kumana Safari" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Yala - Kumana Bird Safari</h2>
                                    <p className="text-muted">Explore the untouched side of Yala. Kumana is a birdwatcher’s paradise and perfect for nature photography. Season: April to July.</p>
                                    <Button href="/#book_now" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Adam’s Peak */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={adamsPeak} className="img-fluid rounded" alt="Adam's Peak" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Adam’s Peak Pilgrimage</h2>
                                    <p className="text-muted">Join a sacred journey to the top of Sri Lanka’s holy mountain. Best climbed between December and May for sunrise views and cultural experience.</p>
                                    <Button href="/#book_now" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default SeasonalTours;
