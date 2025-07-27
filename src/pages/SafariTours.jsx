// import { useState } from "react";
import { Card, Button, Row, Col, Carousel } from "react-bootstrap";

import CustomNavbar from '../components/CustomNavbar';
import backgroundimage from '../assets/backgroud_image_elephant.jpg';
import slider1 from '../assets/Yala-National-Park.jpg';
import slider2 from '../assets/nine_arch_bridge_02.jpg';
import slider3 from '../assets/slider1.jpg';
import seasonalturs from '../assets/Sigiriya-Leopard-in-Sri-Lanka.jpg';
import udawalava01 from '../assets/Udawalawe-Safari-Leopard-in-Sri-Lanka.jpg';
import udawalava02 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image03.jpg';
import udawalava03 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image06.jpg';
import udawalava04 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image09.jpg';
import udawalava05 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image12.jpg';
import udawalava06 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image13.jpg';
import udawalava07 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image14.jpg';
import udawalava08 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image16.jpg';
import udawalava09 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image19.jpg';
import udawalava10 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image21.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const heroSlides = [
  {
    image: slider1,
    heading: 'Udawalawe Safari Tours',
    subheading: 'Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.',
  },
  {
    image: slider2,
    heading: 'Explore Nature Up Close',
    subheading: 'Get ready for breathtaking encounters with elephants and more in their natural habitat.',
  },
  {
    image: slider3,
    heading: 'Luxury & Adventure Combined',
    subheading: 'Stay in comfort while experiencing the thrill of Sri Lanka’s wildlife.',
  },
];

function SafariTours() {

  const imageList = [udawalava01, udawalava02, udawalava03, udawalava04, udawalava05, udawalava06, udawalava07, udawalava08, udawalava09, udawalava10];

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <Carousel fade interval={3000}>
        {heroSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="safari_tours-hero"
              style={{
                background: `url(${slide.image}) no-repeat center center/cover`,
              }}
            >
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center text-white"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  height: '100%',
                  padding: '20px',
                }}
              >
                <h1 data-aos="fade-up" className="fw-bold">
                  {slide.heading}
                </h1>
                <p data-aos="fade-up" data-aos-delay="200">
                  {slide.subheading}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <section className="mb-3 pb-0 w-100 safari_tours-packeges">
        <Row style={{background: `url(${backgroundimage}) no-repeat center center/cover `}}>
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
                            style={{ objectFit: 'cover', borderRadius: '5px'}}
                            />
                        </Col>

                        {/* Right Content Side */}
                        <Col md={6} className="text-center px-3 py-5" style={{ backgroundColor: 'rgba(246, 239, 213, 0.5)' }}>
                            <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00'}}>
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
                              More Info
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col md={12} className="mb-4">
                <Card className="border-0 bg-transparent">
                    <Row className="g-0 align-items-center">
                        {/* Left Image Side */}
                        <Col md={6} className="text-center px-3 py-5" style={{ backgroundColor: 'rgba(216, 235, 250, 0.63)'}}>
                            <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00'}}>
                                Seasonal Tours
                            </h2>
                            <p className="mb-4 text-dark" style={{textShadow: '0 0 4px #ffffff'}}>
                                Explore the stunning landscapes and diverse wildlife of Udawalawe National Park. Our safari tours offer
                                a unique opportunity to witness elephants, leopards, and more in their natural habitat.
                            </p>
                            <Button
                                href="/SeasonalTours"
                                className="px-4 py-2 fw-bold text-uppercase border-0"
                                style={{
                                    backgroundColor: '#f8aa28',
                                    borderRadius: '10px',
                                    letterSpacing: '1px',
                                    color: '#3d1e00'
                                }}
                            >
                              More Info
                            </Button>
                        </Col>

                        {/* Right Image Side */}
                        <Col md={6}>
                            <img
                            src={seasonalturs}
                            alt="Udawalawe National Park Safari"
                            className="img-fluid"
                            style={{ objectFit: 'cover', borderRadius: '5px'}}
                            />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
      </section>

      {/* Call to Action */}
        <div className=" cta-section text-center">
          <h3 className='fw-bold text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Ready to Experience the Best?</h3>
          <p data-aos="fade-up" data-aos-delay="400">Join us for an unforgettable experience. Book a tour with us today!</p>
          <Button className='btn-warning text-dark fw-bold' href="/contact#book_now" data-aos="fade-up" data-aos-delay="600">Book Now</Button>
        </div>

      {/* Image Slider */}
      <section className='container p-4 my-5 pt-5 hero-slider-container bg-white' 
        style={{boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', borderRadius: '15px', width: '100vw'}} data-aos="zoom-in" data-aos-delay= "200">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          spaceBetween={5}
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
          breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
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
    </>
  );
}

export default SafariTours;
