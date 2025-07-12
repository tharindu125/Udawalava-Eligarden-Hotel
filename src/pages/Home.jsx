// src/pages/Home.jsx
import CustomNavbar from '../components/CustomNavbar';
import MainCarousel from '../components/MainCarousel';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import { Modal } from 'react-bootstrap';
import { FaSearchPlus } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import welcomeImage from '../assets/slider2.jpg';
import welcomeImage2 from '../assets/Udawalava-Eligarden-Hotel-Safari-Gallery-Image06.jpg';
import nearPlace1 from '../assets/slider1.jpg'
import nearPlace2 from '../assets/Maduwanwela-Walawwa.jpg'
import nearPlace3 from '../assets/Sankapala.jpg'
import nearPlace4 from '../assets/elephant_transit.webp'
import nearPlace5 from '../assets/wavulpone.webp'
import roomsImage from '../assets/Udawalava-Eligarden-Hotel-rooms.jpg'
import restaurantimage from '../assets/Udawalava-Eligarden-Hotel-restaurants.jpg';

import img1 from '../assets/Restaurent.jpeg';
import img2 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image01.jpg';
import img3 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image02.jpg';
import img4 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image05.jpg';
import img5 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image05.jpg';
import img6 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image04.jpg';
import img7 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image07.jpg';
import img8 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image08.jpg';
import img9 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image08.jpg';
import img10 from '../assets/Udawalava-Eligarden-Hotel-Gallery-Image05.jpg';

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


function Home() {
  const nearbyAttractions = [
    {
      title: 'Udawalawa National Park',
      distance: '2.3 km',
      description: 'Experience the rich biodiversity and stunning landscapes of this national park.',
      image: nearPlace1,
      fade: '200',
    },
    {
      title: 'Maduwanwela Walawwa',
      distance: '43 km',
      description: 'Explore the historic mansion with colonial architecture and rich history.',
      image: nearPlace2,
      fade: '300',
    },
    {
      title: 'Katupila wewa',
      distance: '8.5 km',
      description: 'A scenic waterfall surrounded by lush forest — perfect for a short trek.',
      image: welcomeImage,
      fade: '400',
    },
    {
      title: 'Sankhapala Ancient Historical Temple',
      distance: '15 km',
      description: 'An ancient Buddhist temple nestled in the hills with beautiful views.',
      image: nearPlace3,
      fade: '500',
    },
    {
      title: 'Elephant Transit Home',
      distance: '6.6 km',
      description: 'See baby elephants being rehabilitated before they return to the wild.',
      image: nearPlace4,
      fade: '600',
    },
    {
      title: 'Wawulpane Limestone Cave',
      distance: '21 km',
      description: 'A prehistoric limestone cave with a flowing stream and bat colonies.',
      image: nearPlace5 ,
      fade: '700',
    }
  ];  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    checkIn: null,
    checkOut: null,
    packages: [],
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});

  const packageOptions = [
    { value: 'Single Room', label: 'Single Room' },
    { value: 'Double Room', label: 'Double Room' },
    { value: 'Triple Room', label: 'Triple Room' },
  ];
  
  const validate = () => {
    let temp = {};
    temp.name = formData.name ? '' : 'Name is required';
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid email is required';
    temp.phone = formData.phone ? '' : 'Mobile number is required';
    temp.country = formData.country ? '' : 'Country is required';
    temp.checkIn = formData.checkIn ? '' : 'Check-in date is required';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true); // show loading
    setMessage({ type: '', text: '' }); // reset message
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      checkin: formData.checkIn?.toLocaleDateString(),
      checkout: formData.checkOut?.toLocaleDateString(),
      packages: formData.packages.map(p => p.label).join(', '),
      specialRequests: formData.specialRequests || 'None',
    };
  
    emailjs
      .send('service_yfik5ye', 'template_sk997no', templateParams, 'Gm6ruTC-Zjw_QKJ3N')
      .then(() => {
        setMessage({ type: 'success', text: 'Booking submitted successfully!' });
        setFormData({
          name: '', email: '', phone: '', country: '', checkIn: null, checkOut: null, packages: [], specialRequests: '',
        });
        setTimeout(() => {
          setMessage({ type: '', text: '' });
        }, 3000);
        setErrors({});
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setMessage({ type: 'error', text: 'Failed to send email. Please try again later.' });
      })
      .finally(() => {
        setLoading(false); // hide loading after response
      });
  };

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleOpen = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <>
      <CustomNavbar />
      <div style={{width: '100vw'}}>
        <MainCarousel />
      </div>

      {/* Guest House */}
      <section className='container py-5 main-topic'>
        <div className='row align-items-center'>
          {/* Text Content */}
          <div className='col-md-6 mb-4 mb-md-0 manual_text_left content'>
            <h2 className='h3 fw-bold mb-3 text-warning-emphasis' data-aos="flip-up" data-aos-delay="200">Room Features & Amenities</h2>
            <p className='text-muted mb-3 index-paragraph' data-aos="flip-up" data-aos-delay="300">
              At Udawalawa Elegarden Hotel, we offer a peaceful stay with nature just outside your window. Whether you're traveling alone, as a couple, or with 
              family, our Single, Double, and Triple rooms are designed to match your needs with comfort and privacy.
            </p>
            <p className='text-muted' data-aos="flip-up" data-aos-delay="400">
              All rooms include air conditioning or fan, attached bathroom with hot water, free Wi-Fi, outdoor sitting space, and a designated smoking area. You’ll also 
              find soap, towels, fresh bedding, and a hair dryer ready in your room.
            </p>
            <p data-aos="flip-up" data-aos-delay="500">
              Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.
            </p>
            <Link to="/RoomDetails" className="btn text-light" style={{background: '#664d03', boxShadow: '0 0 5px'}} data-aos="flip-up" data-aos-delay="600">More Details</Link>
          </div>

          {/* Image */}
          <div className='col-md-6 image'>
            <img
              src={roomsImage}
              alt='Room Features & Amenities'
              className='img-fluid rounded shadow'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
             onClick={() => handleOpen(roomsImage)}
            />
            <p className="text-muted small text-center mt-2"><FaSearchPlus className="me-1" />Click to enlarge</p>
          </div>
        </div>
      </section>

      {/* Restuarent */}
      <section className='container py-5 main-topic' style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', background: 'rgb(239, 239, 239)' }}>
        <div className='row align-items-center'>
          {/* Image */}
          <div className='col-md-6 image'>
            <img
              src={restaurantimage}
              alt='Delicious Local & International Restaurant'
              className='img-fluid rounded shadow'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
              onClick={() => handleOpen(restaurantimage)}
            />
            <p className="text-muted small text-center mt-2"><FaSearchPlus className="me-1" />Click to enlarge</p>
          </div>
          {/* Text Content */}
          <div className='col-md-6 mb-4 mb-md-0 manual_text_left content'>
            <h2 className='h3 fw-bold mb-3 text-warning-emphasis' data-aos="flip-up" data-aos-delay="200">Delicious Local & International Restaurant</h2>
            <p className='text-muted mb-3' data-aos="flip-up" data-aos-delay="300">
              Start your day with a hearty breakfast, relax with a satisfying lunch, or unwind with a flavorful dinner — all freshly prepared by our 
              skilled chefs using local ingredients. Whether you prefer to dine in and enjoy the serene atmosphere or grab a quick takeaway, we cater to your needs.
            </p>
            <p className='text-muted' data-aos="flip-up" data-aos-delay="400">
              Our menu brings together the best of both worlds — from authentic Sri Lankan dishes to popular international favorites, there's something to please every palate.
            </p>
            <p className='text-muted' data-aos="flip-up" data-aos-delay="500">
              Looking for something cool and sweet? Treat yourself to a selection of ice creams and refreshing beverages, perfect for a hot Udawalawa afternoon.
            </p>
            <Link to="/Restaurant" className="btn text-light" style={{background: '#664d03', boxShadow: '0 0 5px'}} data-aos="flip-up" data-aos-delay="600">More Details</Link>
          </div>
        </div>
      </section>

      {/* Wild Life & Safari Tours */}
      <section className='container py-5 main-topic'>
        <div className='row align-items-center'>
          {/* Text Content */}
          <div className='col-md-6 mb-4 mb-md-0 manual_text_left content'>
            <h2 className='h3 fw-bold mb-3 text-warning-emphasis' data-aos="flip-up" data-aos-delay="200">Wildlife Adventures : Udawalawe Safari Tours</h2>
            <p className='text-muted mb-3' data-aos="flip-up" data-aos-delay="200">
              Embark on an unforgettable journey with our Udawalawe Safari Tours the perfect way to experience Sri Lanka’s wild beauty. Home to a thriving population 
              of Asian elephants.
            </p>
            <p className='text-muted' data-aos="flip-up" data-aos-delay="300">
              Spanning over 30,821 hectares, the park lies at the intersection of the dry and wet zones, stretching across both Uva and Sabaragamuwa provinces. 
              This diverse ecosystem makes it a haven for a wide variety of wildlife and plant life.
            </p>
            <p className='text-muted' data-aos="flip-up" data-aos-delay="400">
              In addition to elephants, the park is home to a rich array of birds, reptiles, amphibians, mammals, and fish. You may even spot rare creatures like wild cats, 
              and during certain seasons, migratory birds add extra color to the landscape.
            </p>
            <p className='text-muted' data-aos="flip-up" data-aos-delay="500">
              One unique feature of this park is the presence of Sri Lanka’s only known dwarf elephant, an extremely rare and fascinating species found nowhere else in South Asia.
            </p>
            <Link to="/SafariTours" className="btn text-light" style={{background: '#664d03', boxShadow: '0 0 5px'}} data-aos="flip-up" data-aos-delay="600">More Details</Link>
          </div>

          {/* Image */}
          <div className='col-md-6 image'>
            <img
              src={welcomeImage2}
              alt='Wildlife Adventures : Udawalawe Safari Tours'
              className='img-fluid rounded shadow'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              onClick={() => handleOpen(welcomeImage2)}
            />
            <p className="text-muted small text-center mt-2"><FaSearchPlus className="me-1" />Click to enlarge</p>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>Full Image</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {modalImage && <img src={modalImage} alt="Full Size" className="img-fluid w-100" />}
        </Modal.Body>
      </Modal>

      {/* Image Slider */}
      <section className='container py-5 my-4 pt-5 hero-slider-container' 
        style={{boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', background: 'rgb(239, 239, 239)', width: '100vw'}} data-aos="zoom-in" data-aos-delay= "200">
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
          
      {/* Near Places */}
      <section className='container py-5 my-4 near_places'>
        <div className='container manual_text_center'>
          <h2 className='h3 fw-bold mb-3 text-warning-emphasis' data-aos="zoom-in" data-aos-delay="200">Explore Nearby Attractions</h2>
          <p className='text-muted mb-3' data-aos="flip-up" data-aos-delay="300">
            Discover the beauty of Udawalawa and its surroundings. From stunning waterfalls to ancient temples, there's so much to explore.
          </p>
          <div className='row'>
            {nearbyAttractions.map((item, index) => (
              <div className='col-md-4 mb-4' key={index} data-aos="fade-up" data-aos-delay={item.fade}>
                <div className='card h-100 shadow-sm position-relative overflow-hidden'>
                  <div className="position-absolute top-5 start-5 m-2 text-white px-2 py-1 rounded price">
                    <i className="bi bi-geo-alt-fill"></i> {item.distance}
                  </div>
                  <img src={item.image} className='card-img-top' alt={item.title} />
                  <div className='card-body'>
                    <h5 className='card-title fw-bold text-primary-emphasis'>{item.title}</h5>
                    <p className='card-text'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now */}
      <section className='container py-5 my-4 bg-light' id='book_now' style={{ boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)' }}>
        <div className='manual_text_center'>
          <h2 className='h3 fw-bold mb-3 text-warning-emphasis' data-aos="zoom-in" data-aos-delay="200">Ready to Book Your Package</h2>
          <p className='text-muted mb-4 mx-3' data-aos="flip-up" data-aos-delay="300">
            Experience the beauty of Udawalawa with us. Book your stay today and enjoy exclusive offers.
          </p>
        </div>

        <form className='row g-3 mx-3' onSubmit={handleSubmit}>
          <div className='col-md-6' data-aos="flip-right" data-aos-delay="300">
            <label className='form-label'>Name *</label>
            <input type='text' className='form-control' value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='e.g. John Due' required/>
            <small className='text-danger'>{errors.name}</small>
          </div>

          <div className='col-md-6' data-aos="flip-left" data-aos-delay="400">
            <label className='form-label'>Email Address *</label>
            <input type='email' className='form-control' value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder='e.g. johndue@gmail.com' required/>
            <small className='text-danger'>{errors.email}</small>
          </div>

          <div className='col-md-6' data-aos="flip-right" data-aos-delay="500">
            <label className='form-label'>Mobile Number *</label>
            <input type='text' className='form-control' value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder='e.g. +94712345678' required/>
            <small className='text-danger'>{errors.phone}</small>
          </div>

          <div className='col-md-6' data-aos="flip-left" data-aos-delay="600">
            <label className='form-label'>Country *</label>
            <input type='text' className='form-control' value={formData.country}
              onChange={e => setFormData({ ...formData, country: e.target.value })} placeholder='e.g. Sri Lanka' required/>
            <small className='text-danger'>{errors.country}</small>
          </div>

          <div className='col-6' data-aos="flip-right" data-aos-delay="700">
            <label className='form-label'>Select Packages *</label>
            <Select
              isMulti
              options={packageOptions}
              value={formData.packages}
              onChange={selectedOptions => setFormData({ ...formData, packages: selectedOptions })}
              className='basic-multi-select'
              classNamePrefix='select'
              required
            />
          </div>

          <div className='col-md-3' data-aos="flip-left" data-aos-delay="800">
            <label className='form-label'>Check In Date *</label>
            <DatePicker
              selected={formData.checkIn}
              onChange={date => setFormData({ ...formData, checkIn: date })}
              className='form-control'
              placeholderText='Select date'
              minDate={new Date()}
              required
            />
            <small className='text-danger'>{errors.checkIn}</small>
          </div>

          <div className='col-md-3' data-aos="flip-left" data-aos-delay="800">
            <label className='form-label'>Check Out Date</label>
            <DatePicker
              selected={formData.checkOut}
              onChange={date => setFormData({ ...formData, checkOut: date })}
              className='form-control'
              placeholderText='Select date'
              minDate={formData.checkIn} // ✅ disables dates before check-in
              disabled={!formData.checkIn} // Optional: disable until check-in is selected
            />
          </div>

          <div className='col-md-12' data-aos="flip-right" data-aos-delay="900">
            <label className='form-label'>Special Remark</label>
            <textarea className='form-control' rows='3' value={formData.specialRequests}
              onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}></textarea>
          </div>

          {loading && (
            <div className='mt-3 alert alert-info' role='alert'>
              Processing your booking... Please wait.
            </div>
          )}

          {!loading && message.text && (
            <div className={`mt-3 alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} role='alert'>
              {message.text}
            </div>
          )}

          <div className='col-12' data-aos="flip-up" data-aos-delay="1000">
            <button type='submit' className='btn btn-warning text-dark fw-bold'>Submit</button>
          </div>

        </form>
      </section>

      {/* Visit Us */}
      <section className="container py-5 my-4 bg-white">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3">
            <h4 className="fw-bold text-warning-emphasis">Visit Us</h4>
            <p>Located near Udawalawe National Park, just minutes from adventure and nature.</p>
            <a href="https://maps.app.goo.gl/E6x2HycsYbL2pxs16" className="btn btn-outline-primary">Get Directions</a>
          </div>
          <div className="col-md-6">
            <iframe
              title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.1531425375417!2d80.86786452843538!3d6.443766399595056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae425f45c42cc33%3A0xe513b492b06eaa4a!2sElegarden%20Hotel!5e0!3m2!1sen!2slk!4v1746526882578!5m2!1sen!2slk"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Guest Reviews */}
      <section className="container bg-light py-5 my-4" style={{width: '100vw'}}>
        <div className="text-center">
          <h3 className="fw-bold mb-4 text-primary-emphasis">What Our Guests Say</h3>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <blockquote className="blockquote">
                <p>"Amazing stay! The staff was incredibly kind and the room was spotless."</p>
                <footer className="blockquote-footer">Emma W. from UK</footer>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote className="blockquote">
                <p>"Loved the nature around the hotel. Will definitely return!"</p>
                <footer className="blockquote-footer">Saman P. from Sri Lanka</footer>
              </blockquote>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  );
}

export default Home;

