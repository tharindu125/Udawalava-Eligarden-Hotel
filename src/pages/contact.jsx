import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/Udawalawe-Safari-Leopard-in-Sri-Lanka-C-1.jpg';
import backgroundimage from '../assets/backgroud_image_elephant.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      country: '',
      checkIn: null,
      checkOut: null,
      restaurantNote: '',
      packages: [],
      safaripackages: [],
      tourDate: null,
      specialRequests: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const packageOptions = [
      { value: 'Single Room', label: 'Single Room' },
      { value: 'Double Room', label: 'Double Room' },
      { value: 'Triple Room', label: 'Triple Room' },
    ];

    const [selectedServices, setSelectedServices] = useState({
      accommodation: true,
      restaurant: false,
      safari: false,
    });

    const SafaripackageOptions = [
      { value: 'Normal Safari Tour', label: 'Normal Safari Tour - 3Hr' },
      { value: 'Half Day Safari Tour', label: 'Half Day Safari Tour - 6Hr' },
      { value: 'Full Day Safari Tour', label: 'Full Day Safari Tour - 12Hr' },
    ];

    const toggleService = (service) => {
      setSelectedServices(prev => ({
        ...prev,
        [service]: !prev[service]
      }));
    };
    
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
        tourDate: formData.tourDate?.toLocaleDateString(),
        restaurantNote: formData.restaurantNote,
        packages: formData.packages.map(p => p.label).join(', '),
        safaripackages: formData.safaripackages.map(p => p.label).join(', '),
        specialRequests: formData.specialRequests || 'None',
      };
    
      emailjs
        .send('service_yfik5ye', 'template_sk997no', templateParams, 'Gm6ruTC-Zjw_QKJ3N')
        .then(() => {
          setMessage({ type: 'success', text: 'Booking submitted successfully!' });
          setFormData({
            name: '', email: '', phone: '', country: '', checkIn: null, checkOut: null, restaurantNote: '', packages: [],
            tourDate: null, safaripackages: [], specialRequests: '',
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

  return (
    <>
      <CustomNavbar />
      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', width: '100vw', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Contact Us</h1>
          <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
            Reach out to us for reservations, inquiries, or any assistance — our team is always ready to make your stay smooth and memorable.
          </p>
        </div>
      </div>

      <div className="contact-container" style={{paddingTop: '70px', background: `url(${backgroundimage}) no-repeat center center/cover `}}>
        <Container>
          <Row>
            {/* Google Map Section */}
            <Col xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="map-container">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.1531425375417!2d80.86786452843538!3d6.443766399595056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae425f45c42cc33%3A0xe513b492b06eaa4a!2sElegarden%20Hotel!5e0!3m2!1sen!2slk!4v1746526882578!5m2!1sen!2slk"
                  width="100%"
                  height="370"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>

            {/* Contact Details Section */}
            <Col xs={12} md={6}>
              <div className="contact-details">
                <Card className="contact-card">
                  <Card.Body className='card_body'>
                    
                    {/* Address */}
                    <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
                      <h5 className='text-primary-emphasis'>Address:</h5>
                      <p>Udawalawa Elegarden Hotel, Udawalawa, Sri Lanka</p>
                    </div>

                    {/* Phone */}
                    <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
                      <h5 className='text-primary-emphasis'>Phone:</h5>
                      <div className='d-flex gap-5 mobile_no'>
                        <p><FaPhone /> +94 76 560 3802</p>
                        {/* <p><FaPhone /> +94 123 456 789</p> */}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
                      <h5 className='text-primary-emphasis'>Email:</h5>
                      <p><FaEnvelope />info@udawalaweelegardenhotelandsafari.com</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="social-icons" data-aos="fade-up" data-aos-delay="200">
                      <h5 className='text-primary-emphasis'>Follow Us:</h5>
                      <Button href="https://www.facebook.com" target="_blank" variant="link">
                        <FaFacebook size={30} />
                      </Button>
                      <Button href="https://www.instagram.com" target="_blank" variant="link">
                        <FaInstagram size={30} />
                      </Button>
                      <Button href="https://www.twitter.com" target="_blank" variant="link">
                        <FaTwitter size={30} />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>

        <section className='container py-5 my-4' id='book_now' style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.83)', borderRadius: '10px' }}>
          <div className='manual_text_center'>
            <h2 className='h3 fw-bold mb-3 text-warning-emphasis' data-aos="zoom-in" data-aos-delay="200">Ready to Book Your Package</h2>
            <p className='text-muted mb-4 mx-3' data-aos="flip-up" data-aos-delay="300">
              Experience the beauty of Udawalawa with us. Book your stay today and enjoy exclusive offers.
            </p>
          </div>

          <form className='row g-3 mx-3' onSubmit={handleSubmit}>

            {/* Shared Basic Info Fields */}
            <div className='col-md-6'>
              <label className='form-label'>Name *</label>
              <input type='text' className='form-control' value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='e.g. John Due' required />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Email Address *</label>
              <input type='email' className='form-control' value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder='e.g. johndue@gmail.com' required />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Mobile Number *</label>
              <input type='text' className='form-control' value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder='e.g. +94712345678' required />
            </div>

            <div className='col-md-6'>
              <label className='form-label'>Country *</label>
              <input type='text' className='form-control' value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })} placeholder='e.g. Sri Lanka' required />
            </div>

            {/* Service Selectors */}
            <div className='col-12'>
              <label className='form-label fw-bold mx-3 mt-3 ms-0 fs-5'>Select Services</label>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='accommodation'
                  checked={selectedServices.accommodation}
                  onChange={() => toggleService('accommodation')}
                />
                <label className='form-check-label' htmlFor='accommodation  fs-5'>Accommodation</label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='restaurant'
                  checked={selectedServices.restaurant}
                  onChange={() => toggleService('restaurant')}
                />
                <label className='form-check-label' htmlFor='restaurant  fs-5'>Restaurant</label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='safari'
                  checked={selectedServices.safari}
                  onChange={() => toggleService('safari')}
                />
                <label className='form-check-label' htmlFor='safari  fs-5'>Udawalawa Safari Tours</label>
              </div>
            </div>

            {/* ✅ Accommodation Fields */}
            {selectedServices.accommodation && (
              <div className='row'>
                <label className='form-label fw-bold mx-3 mt-3 ms-0 mb-0 text-warning'>Accommodation</label>
                <div className='col-6'>
                  <label className='form-label'>Select Packages *</label>
                  <Select
                    isMulti
                    options={packageOptions}
                    value={formData.packages}
                    onChange={selectedOptions => setFormData({ ...formData, packages: selectedOptions })}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    required
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label'>Check In Date *</label>
                  <DatePicker
                    selected={formData.checkIn}
                    onChange={date => setFormData({ ...formData, checkIn: date })}
                    className='form-control'
                    placeholderText='Select date'
                    minDate={new Date()}
                    required
                  />
                </div>

                <div className='col-md-3'>
                  <label className='form-label'>Check Out Date</label>
                  <DatePicker
                    selected={formData.checkOut}
                    onChange={date => setFormData({ ...formData, checkOut: date })}
                    className='form-control'
                    placeholderText='Select date'
                    minDate={formData.checkIn}
                    disabled={!formData.checkIn}
                  />
                </div>
              </div>
            )}

            {/* ✅ Restaurant Fields */}
            {selectedServices.restaurant && (
              <div className='row'>
                <label className='form-label fw-bold mx-3 mt-3 ms-0 mb-0 text-warning'>Restaurant</label>
                <div className='col-md-12'>
                  <label className='form-label'>Restaurant Booking Details</label>
                  <textarea className='form-control' rows='2' placeholder='e.g. Lunch for 4 people on August 3rd'
                    value={formData.restaurantNote}
                    onChange={e => setFormData({ ...formData, restaurantNote: e.target.value })} />
                </div>
              </div>
            )}

            {/* ✅ Safari Tour Fields */}
            {selectedServices.safari && (
              <div className='row'>
                <label className='form-label fw-bold mx-3 mt-3 ms-0 mb-0 text-warning'>Udawalawa Safari Tours</label>
                <div className='col-md-6'>
                  <label className='form-label'>Safari Tour Packeges</label>
                  <Select
                    isMulti
                    options={SafaripackageOptions}
                    value={formData.safaripackages}
                    onChange={selectedOptions => setFormData({ ...formData, safaripackages: selectedOptions })}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    required
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                  />
                </div>
                <div className='col-md-3'>
                  <label className='form-label'>Tour Date *</label>
                  <DatePicker
                    selected={formData.tourDate}
                    onChange={date => setFormData({ ...formData, tourDate: date })}
                    className='form-control'
                    placeholderText='Select date'
                    minDate={new Date()}
                    required
                  />
                </div>
              </div>
            )}

            {/* Special Remark */}
            <div className='col-md-12'>
              <label className='form-label'>Special Remark</label>
              <textarea className='form-control' rows='3' value={formData.specialRequests}
                onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}></textarea>
            </div>

            {/* Status and Submit */}
            {loading && (
              <div className='mt-3 alert alert-info'>Processing your booking... Please wait.</div>
            )}
            {!loading && message.text && (
              <div className={`mt-3 alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {message.text}
              </div>
            )}
            <div className='col-12'>
              <button type='submit' className='btn btn-warning text-dark fw-bold'>Submit</button>
            </div>
          </form>

        </section>
      </div>
    </>
  );
}

export default Contact;
