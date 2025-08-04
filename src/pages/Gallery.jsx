import { useState } from "react";
import Masonry from "react-masonry-css";
import { Button, Container, Modal } from "react-bootstrap";

import CustomNavbar from "../components/CustomNavbar";

import image01 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image01.jpg";
import image02 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image02.jpg";
import image03 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image03.jpg";
import image04 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image04.jpg";
import image05 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image05.jpg";
import image06 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image06.jpg";
import image07 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image07.jpg";
import image08 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image08.jpg";
import image09 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image09.jpg";
import image10 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image10.jpg";
import image11 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image11.jpg";
import image12 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image12.jpg";
import image13 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image13.jpg";
import image14 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image14.jpg";
import image15 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image15.jpg";
import image16 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image16.jpg";
import image17 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image17.jpg";
import image18 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image18.jpg";
import image19 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image19.jpg";
import image20 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image20.jpg";
import image21 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image21.jpg";
import image22 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image22.jpg";
import image23 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image23.jpg";
import image24 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image24.jpg";
import image25 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image25.jpg";
import image26 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image26.jpg";
import image27 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image27.jpg";
import image28 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image28.jpg";
import image29 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image29.jpg";
import image30 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image30.jpg";
import image31 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image31.jpg";
import image32 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image32.jpg";
import image33 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image33.jpg";
import image34 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image34.jpg";
import image35 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image35.jpg";
import image36 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image36.jpg";
import image37 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image37.jpg";
import image38 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image38.jpg";
import image39 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image39.jpg";
import image40 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image40.jpg";
import image41 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image41.jpg";
import image42 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image42.jpg";
import image43 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image43.jpg";
import image44 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image44.jpg";
import image45 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image45.jpg";
import image46 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image46.jpg";
import image47 from "../assets/bathroom_image_01.jpg";
import image48 from "../assets/Udawalava-Eligarden-Hotel-Gallery-Image48.jpg";
import image49 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image49.jpg";
import image50 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image50.jpg";
import image51 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image51.jpg";
import image52 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image52.jpg";
import image53 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image53.jpg";
import image54 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image54.jpg";
import image55 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image55.jpg";
import image56 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image56.jpg";
import image57 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image57.jpg";
import image58 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image58.jpg";
import image59 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image59.jpg";
import image60 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image60.jpg";
import image61 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image61.jpg";
import image62 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image62.jpg";
import image63 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image63.jpg";
// import image58 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image62.jpg";
// import image59 from "../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image63.jpg";
import slider1 from "../assets/slider1.jpg";

const categories = ["All", "Room & Hotel", "Restaurant", "Safari Tours"];

const images = [
  { id: 1, url: image01, category: "Room & Hotel" },
  { id: 2, url: image02, category: "Room & Hotel" },
  { id: 3, url: image03, category: "Safari Tours" },
  { id: 4, url: image04, category: "Restaurant" },
  { id: 5, url: image05, category: "Restaurant" },
  { id: 6, url: image06, category: "Safari Tours" },
  { id: 7, url: image07, category: "Room & Hotel" },
  { id: 8, url: image08, category: "Restaurant" },
  { id: 9, url: image09, category: "Safari Tours" },
  { id: 10, url: image10, category: "Restaurant" },
  { id: 11, url: image11, category: "Room & Hotel" },
  { id: 12, url: image12, category: "Safari Tours" },
  { id: 13, url: image13, category: "Safari Tours" },
  { id: 14, url: image14, category: "Safari Tours" },
  { id: 15, url: image15, category: "Room & Hotel" },
  { id: 16, url: image16, category: "Safari Tours" },
  { id: 17, url: image17, category: "Restaurant" },
  { id: 18, url: image18, category: "Restaurant" },
  { id: 19, url: image19, category: "Safari Tours" },
  { id: 20, url: image20, category: "Restaurant" },
  { id: 21, url: image21, category: "Safari Tours" },
  { id: 22, url: image22, category: "Safari Tours" },
  { id: 23, url: image23, category: "Safari Tours" },
  { id: 24, url: image24, category: "Safari Tours" },
  { id: 25, url: image25, category: "Safari Tours" },
  { id: 26, url: image26, category: "Safari Tours" },
  { id: 27, url: image27, category: "Safari Tours" },
  { id: 28, url: image28, category: "Safari Tours" },
  { id: 29, url: image29, category: "Safari Tours" },
  { id: 30, url: image30, category: "Room & Hotel" },
  { id: 31, url: image31, category: "Safari Tours" },
  { id: 32, url: image32, category: "Room & Hotel" },
  { id: 33, url: image33, category: "Room & Hotel" },
  { id: 34, url: image34, category: "Safari Tours" },
  { id: 35, url: image35, category: "Safari Tours" },
  { id: 36, url: image36, category: "Restaurant" },
  { id: 37, url: image37, category: "Restaurant" },
  { id: 38, url: image38, category: "Safari Tours" },
  { id: 39, url: image39, category: "Room & Hotel" },
  { id: 40, url: image40, category: "Safari Tours" },
  { id: 41, url: image41, category: "Safari Tours" },
  { id: 42, url: image42, category: "Safari Tours" },
  { id: 43, url: image43, category: "Room & Hotel" },
  { id: 44, url: image44, category: "Safari Tours" },
  { id: 45, url: image45, category: "Room & Hotel" },
  { id: 46, url: image46, category: "Room & Hotel" },
  { id: 47, url: image47, category: "Room & Hotel" },
  { id: 48, url: image48, category: "Room & Hotel" },
  { id: 49, url: image49, category: "Safari Tours" },
  { id: 50, url: image50, category: "Safari Tours" },
  { id: 51, url: image51, category: "Safari Tours" },
  { id: 52, url: image52, category: "Safari Tours" },
  { id: 53, url: image53, category: "Safari Tours" },
  { id: 54, url: image54, category: "Safari Tours" },
  { id: 55, url: image55, category: "Safari Tours" },
  { id: 46, url: image56, category: "Safari Tours" },
  { id: 57, url: image57, category: "Safari Tours" },
  { id: 58, url: image58, category: "Safari Tours" },
  { id: 59, url: image59, category: "Safari Tours" },
  { id: 60, url: image60, category: "Safari Tours" },
  { id: 61, url: image61, category: "Safari Tours" },
  { id: 62, url: image62, category: "Safari Tours" },
   { id: 63, url: image63, category: "Safari Tours" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
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
          width: "100vw",
          height: "400px",
          background: `url(${slider1}) no-repeat center center/cover`,
        }}
      >
        <div className="hero-overlay">
          <h1
            className="text-center text-white fw-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Gallery
          </h1>
          <p
            className="text-center text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore stunning moments from our hotel, surroundings, and guest
            experiences — a glimpse into your next unforgettable stay.
          </p>
        </div>
      </div>

      <section className="gallery-section bg-white">
        <div className="container">
          <div
            className="d-flex justify-content-center gap-3 flex-wrap mb-4"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <h3
            className="text-left fw-bold"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            {selectedCategory}
          </h3>
          <hr
            className="mb-4 mt-0 w-25 border-2 border-dark fade-in-load delay-1"
            data-aos="zoom-out"
            data-aos-delay="200"
          />

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
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img.url}
                  alt={img.category}
                  className="img-fluid rounded shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      <Modal
        show={!!modalImage}
        onHide={() => setModalImage(null)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Full Image</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {modalImage && (
            <img src={modalImage} alt="Full View" className="img-fluid w-100" />
          )}
        </Modal.Body>
      </Modal>

      <Container className="py-3">
        {/* Call to Action */}
        <div className="cta-section text-center mb-3 shadow">
          <h3
            className="fw-bold text-warning-emphasis"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ready to Experience the Best?
          </h3>
          <p data-aos="fade-up" data-aos-delay="400">
            Join us for an unforgettable experience. Book a tour with us today!
          </p>
          <Button
            className="btn-warning text-dark fw-bold"
            href="/contact#book_now"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Book Now
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Gallery;
