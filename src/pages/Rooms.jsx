import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import MainCarousel from '../components/MainCarousel';
import {
  FaWifi,
  FaFan,
  FaShower,
  FaSmoking,
  FaBed,
  FaTshirt,
} from 'react-icons/fa';
import {
  MdBathroom,
  MdDeck ,      
  MdLocalLaundryService,
  MdRoomService,       
} from 'react-icons/md';

const RoomsSection = () => {
  return (
    <>
        <CustomNavbar />
        {/* <div>
            <MainCarousel />
        </div> */}
        <section className="container mt-5 mb-5 py-5 bg-light" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold">Rooms & Guest House</h2>
                <p className="text-muted">
                Experience a relaxing stay at <strong>Udawalawa Elegarden Hotel</strong>, where comfort meets nature. Whether you're traveling solo, as a couple, or with family, we have the perfect room for you.
                </p>
            </div>

            {/* Room Types */}
            <div className="row text-center mb-4">
                <div className="col-md-4 mb-3">
                <FaBed size={30} className="mb-2 text-primary" />
                <h5>Single Room</h5>
                <p className="text-muted">Perfect for solo travelers looking for peace and privacy.</p>
                </div>
                <div className="col-md-4 mb-3">
                <FaBed size={30} className="mb-2 text-primary" />
                <h5>Double Room</h5>
                <p className="text-muted">Ideal for couples or friends, offering a cozy and spacious atmosphere.</p>
                </div>
                <div className="col-md-4 mb-3">
                <FaBed size={30} className="mb-2 text-primary" />
                <h5>Triple Room</h5>
                <p className="text-muted">Great for families or small groups, providing enough space and comfort for everyone.</p>
                </div>
            </div>

            {/* Features */}
            <div className="row mb-5">
                <div className="col-md-6">
                <h4 className="fw-semibold mb-3">Room Features & Amenities</h4>
                <ul className="list-unstyled">
                    <li><FaFan className="me-2 text-secondary" /> Air Conditioning / Fan</li>
                    <li><MdBathroom className="me-2 text-secondary" /> Attached Private Bathroom</li>
                    <li><FaShower className="me-2 text-secondary" /> Hot Water</li>
                    <li><MdDeck  className="me-2 text-secondary" /> Outdoor Sitting Area</li>
                    <li><FaSmoking className="me-2 text-secondary" /> Smoking Area</li>
                    <li><FaWifi className="me-2 text-secondary" /> Free High-Speed Wi-Fi</li>
                </ul>
                </div>
                <div className="col-md-6">
                <h4 className="fw-semibold mb-3">Complimentary Items & Services</h4>
                <ul className="list-unstyled">
                    <li><FaTshirt className="me-2 text-secondary" /> Soap, Towels & Hair Dryer</li>
                    <li><MdLocalLaundryService className="me-2 text-secondary" /> Laundry Service (Free)</li>
                    <li><MdRoomService className="me-2 text-secondary" /> Room Service (Free)</li>
                </ul>
                </div>
            </div>

            {/* Closing Note */}
            <div className="text-center">
                <p className="text-muted">
                With peaceful surroundings, clean and well-equipped rooms, and friendly service, <strong>Udawalawa Elegarden Hotel</strong> is your perfect home near Udawalawa National Park.
                </p>
            </div>
        </section>
    </>
    
  );
};

export default RoomsSection;
