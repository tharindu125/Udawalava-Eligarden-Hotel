import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import {Button, Container } from 'react-bootstrap';

import CustomNavbar from '../components/CustomNavbar';

import image01 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image01.jpg';
import image02 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image02.jpg';
import image03 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image03.jpg';
import image04 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image04.jpg';
import image05 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image05.jpg';
import image06 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image06.jpg';
import image07 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image07.jpg';
import image08 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image08.jpg';
import image09 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image09.jpg';
import image10 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image10.jpg';

import slider1 from '../assets/slider1.jpg';

const categories = ['All', 'Room & Hotel', 'Restaurant', 'Safari Tours'];

const images = [
  { id: 1, url: image01, category: 'Room & Hotel' },
  { id: 2, url: image02, category: 'Room & Hotel' },
  { id: 3, url: image03, category: 'Safari Tours' },
  { id: 4, url: image04, category: 'Restaurant' },
  { id: 5, url: image05, category: 'Restaurant' },
  { id: 6, url: image06, category: 'Safari Tours' },
  { id: 7, url: image07, category: 'Room & Hotel' },
  { id: 8, url: image08, category: 'Restaurant' },
  { id: 9, url: image09, category: 'Safari Tours' },
  { id: 10, url: image10, category: 'Restaurant' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 3,
    400: 2,
    300: 1,
  };

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div
        className="about-hero-section"
        style={{
          position: "relative",
          height: "400px",
          background: `url(${slider1}) no-repeat center center/cover`,
        }}
      >
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Gallery</h1>
          <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
            Explore stunning moments from our hotel, surroundings, and guest
            experiences — a glimpse into your next unforgettable stay.
          </p>
        </div>
      </div>

      <section className="gallery-section bg-white">
        <div className="container">
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-4" data-aos="zoom-out" data-aos-delay="400">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <h3 className="text-left fw-bold" data-aos="zoom-out" data-aos-delay="200">{selectedCategory}</h3>
          <hr className='mb-4 mt-0 w-25 border-2 border-dark fade-in-load delay-1' data-aos="zoom-out" data-aos-delay="200"/>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="gallery-img-wrapper"
                onClick={() => setModalImage(img.url)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.url}
                  alt={img.category}
                  className="img-fluid rounded shadow-lg"
                  data-aos="fade-up" data-aos-delay="200"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)} data-aos="zoom-in" data-aos-delay="200">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Full view" className="modal-img" />
            <button className="modal-close" onClick={() => setModalImage(null)}>X</button>
          </div>
        </div>
      )}

      <Container className="py-3">
        {/* Call to Action */}
        <div className="cta-section text-center mb-3 shadow">
          <h3 className='fw-bold text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Ready to Experience the Best?</h3>
          <p data-aos="fade-up" data-aos-delay="400">Join us for an unforgettable experience. Book a tour with us today!</p>
          <Button variant="primary" href="/contact#book_now" data-aos="fade-up" data-aos-delay="600">Book Now</Button>
        </div>
      </Container>
    
    </>
  );
};

export default Gallery;
