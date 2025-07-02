// import { useState } from "react";
import { Accordion, Card, Button, ListGroup, Row, Col, Modal, Carousel } from "react-bootstrap";

import CustomNavbar from '../components/CustomNavbar';

import slider1 from '../assets/slider1.jpg';
import backgroundImage from '../assets/backgroud_image_leopard.jpeg';
import udawalava01 from '../assets/sri-lanka-wild-life.jpg';
import udawalava02 from '../assets/sri-lanka-leopard-asian.jpg';
import udawalava03 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image09.jpg';
import udawalava04 from '../assets/Udawalava-Eligarden-Hotel-Wildlife-Adventures.jpg';
import udawalava05 from '../assets/Udawalava-Eligarden-Hotel-Safari.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function SafariTours() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState(null);
  const imageList = [udawalava01, udawalava02, udawalava03, udawalava04, udawalava05];

//   const handlePackageClick = (pkg) => {
//     setSelectedPackage(pkg);
//     setShowModal(true);
//   };

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div
        className="about-hero-section"
        style={{
          position: 'relative',
          height: '400px',
          background: `url(${slider1}) no-repeat center center/cover`,
        }}
      >
        <div className="hero-overlay">
          <h1
            className="text-center text-white fw-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Udawalawe Safari Tours
          </h1>
          <p
            className="text-center text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.
          </p>
        </div>
      </div>

      <section className="mb-3 py-2 w-100" >
        <Row>
            {/* Safari Card */}
            <Col md={12} className="mb-4">
                <Card className="border-0 bg-transparent">
                    <Row className="g-0 align-items-center">
                        {/* Left Image Side */}
                        <Col md={6}>
                            <img
                            src={udawalava01}
                            alt="Udawalawe National Park Safari"
                            className="img-fluid"
                            style={{ objectFit: 'cover', borderRadius: '8px 0 0 8px', height: '500px' }}
                            />
                        </Col>

                        {/* Right Content Side */}
                        <Col md={6} className="text-center px-4 py-5" style={{ backgroundColor: '#fff' }}>
                            <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2.5rem' }}>
                                Udawalawe Safari
                            </h2>
                            <p className="text-muted mb-4">
                                Explore the stunning landscapes and diverse wildlife of Udawalawe National Park. Our safari tours offer
                                a unique opportunity to witness elephants, leopards, and more in their natural habitat.
                            </p>
                            <Button
                                href="/UdawalaweSafariTours"
                                className="px-4 py-2 fw-bold text-uppercase border-0"
                                style={{
                                    backgroundColor: '#f8aa28',
                                    borderRadius: '10px',
                                    letterSpacing: '1px',
                                    color: '#3d1e00'
                                }}
                            >
                                Book a Safari
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col md={12} className="mb-4">
                <Card className="border-0 bg-transparent">
                    <Row className="g-0 align-items-center">
                        {/* Left Image Side */}
                        <Col md={6} className="text-center px-4 py-5" style={{ backgroundColor: '#fff' }}>
                            <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2.5rem' }}>
                                Seasonal Tours
                            </h2>
                            <p className="text-muted mb-4">
                                Explore the stunning landscapes and diverse wildlife of Udawalawe National Park. Our safari tours offer
                                a unique opportunity to witness elephants, leopards, and more in their natural habitat.
                            </p>
                            <Button
                                href="/UdawalaweSafariTours"
                                className="px-4 py-2 fw-bold text-uppercase border-0"
                                style={{
                                    backgroundColor: '#f8aa28',
                                    borderRadius: '10px',
                                    letterSpacing: '1px',
                                    color: '#3d1e00'
                                }}
                            >
                                Book a Safari
                            </Button>
                        </Col>

                        {/* Right Image Side */}
                        <Col md={6}>
                            <img
                            src={udawalava02}
                            alt="Udawalawe National Park Safari"
                            className="img-fluid"
                            style={{ objectFit: 'cover', borderRadius: '8px 0 0 8px', height: '500px' }}
                            />
                        </Col>
                    </Row>
                </Card>
            </Col>

          {/* Other Tours */}
          {/* {[
            'Wildlife Photography Tour',
            'Bird Watching Expedition',
            'Family Safari Adventure',
          ].map((tour, i) => (
            <Col md={12} className="mb-4" key={i}>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>{tour}</Card.Title>
                  <Card.Text>
                    {tour === 'Wildlife Photography Tour' &&
                      'Capture breathtaking moments with our wildlife photography tours. Perfect for both amateur and professional photographers looking to enhance their skills in a natural setting.'}
                    {tour === 'Bird Watching Expedition' &&
                      'Join our bird watching expedition to discover the rich avian diversity of Udawalawe. A perfect tour for bird enthusiasts and nature lovers.'}
                    {tour === 'Family Safari Adventure' &&
                      'Enjoy a family-friendly safari adventure with activities suitable for all ages. Create lasting memories while exploring the wonders of Udawalawe.'}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handlePackageClick(tour)}>View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))} */}
        </Row>

        {/* Image Slider */}
      <section className='container py-5 my-4 pt-5 hero-slider-container w-100 bg-white' 
        style={{boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', borderRadius: '15px'}} data-aos="zoom-in" data-aos-delay= "200">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="hero-swiper"
          >
            {imageList.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index}`} className="slider-img" data-aos="zoom-in" data-aos-delay= "200"/>
              </SwiperSlide>
            ))}
          </Swiper>
      </section>

      </section>
    </>
  );
}

export default SafariTours;
