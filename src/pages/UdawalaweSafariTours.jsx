
import {Card, Button, Row, Col } from "react-bootstrap";

import CustomNavbar from '../components/CustomNavbar';

import backgroundimage02 from '../assets/sri_lanka_elephant_04.jpg'
import backgroundimage03 from '../assets/sri_lanka_elephant_01.jpg'
import backgroundimage04 from '../assets/sri-lanka-wild-life.jpg'
import slider1 from '../assets/Udawalawe-Safari-Leopard-in-Sri-Lanka-hero.jpg';
import udawalava01 from '../assets/Udawalawe-Safari-Leopard-in-Sri-Lanka-C-2.jpg'

function SafariTours() {

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
                <h2 className="text-center mb-4 fw-bold display-6 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">Tour Packages</h2>
                <p className='text-center mb-5' data-aos="flip-up" data-aos-delay="200">
                    Embark on an unforgettable journey through Udawalawa National Park with our guided safari tours. Spot elephants, leopards, birds, and more while enjoying safe, knowledgeable service and breathtaking views of nature.
                </p>
            </div>

            <section className="safari_tours-packeges">
                <Row>
                    <Col md={12} className="py-2" style={{background: `url(${backgroundimage03}) no-repeat center center/cover `}}>
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-5" style={{ backgroundColor: 'rgba(246, 239, 213, 0.5)' }}>
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Udawalawe Safari Tours
                                    </h2>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                       Udawalawe National Park is one of the most popular parks for easily spotting elephants. It is located along the boundary between the 
                                       dry and wet zones of Sri Lanka, giving it rich biodiversity.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        The park lies between the Uva and Sabaragamuwa provinces and is the third most visited national park in Sri Lanka. 
                                        It covers an area of 30,821 hectares, including the Udawalawe reservoir.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        This park is a paradise not only for elephants but also for a variety of birds, reptiles, amphibians, mammals, fish, wild cats, 
                                        diverse plant species, and seasonal migratory birds.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        You can even see the dwarf elephant in this forest — the only one of its kind found in South Asia.
                                    </p>
                                    <Button
                                        href="/#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    
                    <Col md={12} className="py-5">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                    <img
                                    src={udawalava01}
                                    alt="Udawalawe National Park Safari"
                                    className="img-fluid"
                                    style={{ objectFit: 'cover', borderRadius: '5px'}}
                                    />
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-2">
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Normal Safari Tours
                                    </h2>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        A Quick Safari Adventure in Udawalawe
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        Short on time? This 3-hour safari is perfect for travelers looking to experience Udawalawe’s wildlife highlights 
                                        without committing to a long day. You’ll explore key areas of the park, with a high chance of spotting elephants, 
                                        buffalo, peacocks, and birds in their natural habitat.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        Our experienced driver and guide ensure a smooth, educational journey while you ride comfortably in a private jeep. 
                                        This is the ideal option for early morning or late afternoon explorers.
                                    </p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Up to 6 guests per jeep</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ 3-Hour : Includes hotel pickup & drop-off</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Water, snacks, and binoculars provided</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Comfortable jeep with expert driver (Over 10 years of experience)</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Ideal for photography & nature lovers</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">☑️ Insurance Available (include extra charge)</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black p-3 mt-3" style={{backgroundColor: '#fae5c4ff', borderRadius: '5px', boxShadow: '0 0 8px #00000081'}}>
                                        Rs: 12000.00 Per Jeep
                                    </p>

                                    <Button
                                        href="/#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0 mt-3"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col md={12} className="py-2" style={{background: `url(${backgroundimage02}) no-repeat center center/cover `}}>
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-5" style={{ backgroundColor: 'rgba(151, 145, 126, 0.7)' }}>
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Half Day Safari Tours
                                    </h2>
                                    <p className="text-light mb-3 manual_text_left text_shadow_black">
                                        Deeper Exploration with Stunning Wildlife Encounters
                                    </p>
                                    <p className="text-light mb-3 manual_text_left text_shadow_black">
                                        Our Half Day Safari Tour (6-hour) gives you the time to fully immerse yourself in Udawalawe’s natural beauty. Choose a morning or 
                                        evening safari, both offering peak wildlife activity — with elephants, eagles, crocodiles, and even wild cats often seen.
                                    </p>
                                    <p className="text-light mb-3 manual_text_left text_shadow_black">
                                        We’ll take a relaxing break mid-safari near a quiet jungle stream or the Udawalawe reservoir. 
                                        Optional jungle breakfast can be arranged for morning guests — a truly wild dining experience!
                                    </p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_white">✅ Up to 6 guests per jeep</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ 6-Hour : Includes hotel pickup & drop-off</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ Water, snacks, and binoculars provided</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ Comfortable jeep with expert driver (Over 10 years of experience)</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ Optional jungle breakfast / lunch available</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">☑️ Insurance Available (include extra charge)</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black p-3 mt-3" style={{backgroundColor: '#5e4823ce', borderRadius: '5px', boxShadow: '0 0 8px #00000081'}}>
                                        Rs: 20000.00 Per Jeep
                                    </p>

                                    <Button
                                        href="/#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0 mt-3"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col md={12} className="py-2">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                    <img
                                    src={backgroundimage04}
                                    alt="Udawalawe National Park Safari"
                                    className="img-fluid"
                                    style={{ objectFit: 'cover', borderRadius: '5px'}}
                                    />
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-5">
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Full Day Safari Tours
                                    </h2>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        The Ultimate Safari Experience in Sri Lanka
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        If you’re serious about wildlife, this Full Day Safari (12-hour)  is made for you. Spend the entire day inside Udawalawe National Park, 
                                        maximizing your chances to witness everything from herds of elephants to rare bird species and elusive predators.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        You’ll explore both popular tracks and hidden paths, with plenty of breaks for rest and wildlife observation. 
                                        A jungle breakfast can be arranged to start your day right, and you'll be accompanied by a highly knowledgeable local guide.
                                    </p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Up to 6 guests per jeep</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ 12-Hour : Includes hotel pickup & drop-off</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Water, snacks, and binoculars provided</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Comfortable jeep with expert driver (Over 10 years of experience)</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Optional jungle breakfast / lunch available</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">☑️ Insurance Available (include extra charge)</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black p-3 mt-3" style={{backgroundColor: '#fae5c4ff', borderRadius: '5px', boxShadow: '0 0 8px #00000081'}}>
                                        Rs: 35000.00 Per Jeep
                                    </p>

                                    <Button
                                        href="/#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0 mt-3"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>
            </section>

        </>
    )
}

export default SafariTours;