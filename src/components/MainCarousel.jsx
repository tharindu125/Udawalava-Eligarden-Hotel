// src/components/MainCarousel.jsx
import { Carousel } from 'react-bootstrap';

function MainCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="/image1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description or promo text here.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/image2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Another description here.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/image3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Something important here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
