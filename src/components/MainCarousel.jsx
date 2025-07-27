// src/components/MainCarousel.jsx
import { Carousel } from 'react-bootstrap';
import { FaHome, FaUtensils, FaBed } from 'react-icons/fa';
import slider2 from '../assets/restaurent_wallpaper_02.jpeg';
import slider1 from '../assets/hotel_wallpaper_01.jpg';
import slider3 from '../assets/sri-lanka-leopard-asian.jpg';

function MainCarousel() {
  return (
    <Carousel fade>
      {/* First Slide */}
      <Carousel.Item>
        <img className="d-block fullscreen-image" src={slider1} alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="container position-relative">

            <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
              <h2>WELCOME TO THE UDAWALAWA ELEGARDEN HOTEL</h2>
              <p>Discover comfort, flavor, and adventure at Udawalawa Elegarden Hotel – your perfect getaway near the wild.</p>
            </div>

            {/* <div className="content row gy-4">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-in" data-aos-delay="200">
                  <h3>Why Choose Us</h3>
                  <p>
                    Unwind in our thoughtfully designed rooms that offer a perfect blend of comfort and tranquility. Whether you're here to explore or relax, our clean and 
                    peaceful environment ensures a restful stay every time.
                  </p>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch icon_box_main">
                <div className="d-flex flex-column justify-content-center">
                  <div className="row gy-4">

                    <div className="d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                        <FaHome className="mb-2" size={24} />
                        <h4>Rooms & Guest House</h4>
                        <p>Experience true comfort in our well-appointed rooms designed with a blend of modern convenience and natural charm. Whether you're here for 
                          adventure or relaxation, our peaceful surroundings and cozy interiors ensure a perfect stay.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img className="d-block w-100 fullscreen-image" src={slider2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="container position-relative">
            <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
              <h2>WELCOME TO THE UDAWALAWA ELEGARDEN RESTAURENT </h2>
              <p>Discover comfort, flavor, and adventure at Udawalawa Elegarden Hotel – your perfect getaway near the wild.</p>
            </div>
{/* 
            <div className="content row gy-4">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-in" data-aos-delay="200">
                  <h3>Why Choose Us</h3>
                  <p>
                    Our on-site restaurant serves a variety of mouthwatering Sri Lankan and international dishes, freshly prepared with local ingredients. 
                    It's the ideal spot to enjoy delicious meals in a cozy and friendly atmosphere.
                  </p>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center">
                  <div className="row gy-4">

                    <div className="d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                        <FaUtensils className="mb-2" size={24} />
                        <h4>Restaurant</h4>
                        <p>Savor the taste of Sri Lanka and beyond at our in-house restaurant. From authentic local dishes to international favorites, every meal is freshly 
                          prepared using quality ingredients and served in a welcoming atmosphere.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img className="d-block w-100 fullscreen-image" src={slider3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="container position-relative">
            <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
              <h2>WELCOME TO THE UDAWALAWA SAFARI TOURS</h2>
              <p>Discover comfort, flavor, and adventure at Udawalawa Elegarden Hotel – your perfect getaway near the wild.</p>
            </div>

            {/* <div className="content row gy-4">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-in" data-aos-delay="200">
                  <h3>Why Choose Us</h3>
                  <p>We offer guided safari tours to the famous Udawalawa National Park, where you can witness elephants, wild animals, and birds in their natural habitat.</p>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center">
                  <div className="row gy-4">

                    <div className="d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
                        <FaBed className="mb-2" size={24} />
                        <h4>Udawalawa Safari Tours</h4>
                        <p>Embark on an unforgettable journey through Udawalawa National Park with our guided safari tours. Spot elephants, leopards, birds, 
                          and more while enjoying safe, knowledgeable service and breathtaking views of nature.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
