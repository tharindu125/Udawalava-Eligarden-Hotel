import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';
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

  return (
    <>
      <CustomNavbar />
      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white">Contact Us</h1>
          <p className="text-center text-white">Learn more about our journey and services</p>
        </div>
      </div>

      <div className="contact-container" style={{ paddingTop: '70px' }}>
        <Container>
          <Row>
            {/* Google Map Section */}
            <Col xs={12} md={6}>
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
                  <Card.Body>
                    
                    {/* Address */}
                    <div className="contact-info">
                      <h5>Address:</h5>
                      <p>Udawalawa Elegarden Hotel, Udawalawa, Sri Lanka</p>
                    </div>

                    {/* Phone */}
                    <div className="contact-info">
                      <h5>Phone:</h5>
                      <div className='d-flex gap-5'>
                        <p><FaPhone /> +94 123 456 789</p>
                        <p><FaPhone /> +94 123 456 789</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="contact-info">
                      <h5>Email:</h5>
                      <p><FaEnvelope /> info@udawalawaelegarden.com</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="social-icons">
                      <h5>Follow Us:</h5>
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

        <section className='container py-5 my-4 bg-light' id='book_now' style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)' }}>
          <div className='manual_text_center'>
            <h2 className='h3 fw-bold mb-3 text-dark'>Ready to Book Your Package</h2>
            <p className='text-muted mb-4 mx-3'>
              Experience the beauty of Udawalawa with us. Book your stay today and enjoy exclusive offers.
            </p>
          </div>
  
          <form className='row g-3 mx-3' onSubmit={handleSubmit}>
            <div className='col-md-6'>
              <label className='form-label'>Name *</label>
              <input type='text' className='form-control' value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='e.g. John Due' required/>
              <small className='text-danger'>{errors.name}</small>
            </div>
  
            <div className='col-md-6'>
              <label className='form-label'>Email Address *</label>
              <input type='email' className='form-control' value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder='e.g. johndue@gmail.com' required/>
              <small className='text-danger'>{errors.email}</small>
            </div>
  
            <div className='col-md-6'>
              <label className='form-label'>Mobile Number *</label>
              <input type='text' className='form-control' value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder='e.g. +94712345678' required/>
              <small className='text-danger'>{errors.phone}</small>
            </div>
  
            <div className='col-md-6'>
              <label className='form-label'>Country *</label>
              <input type='text' className='form-control' value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })} placeholder='e.g. Sri Lanka' required/>
              <small className='text-danger'>{errors.country}</small>
            </div>
  
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
              <small className='text-danger'>{errors.checkIn}</small>
            </div>
  
            <div className='col-md-3'>
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
  
            <div className='col-md-12'>
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
  
            <div className='col-12'>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
  
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
