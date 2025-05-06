import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';
import { useState } from 'react';
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
    const [activeTab, setActiveTab] = useState('single');

    const roomDetails = {
        single: {
            title: 'Single Room',
            description: 'Perfect for solo travelers looking for peace and privacy.',
        },
        double: {
            title: 'Double Room',
            description: 'Ideal for couples or friends, offering a cozy and spacious atmosphere.',
        },
        triple: {
            title: 'Triple Room',
            description: 'Great for families or small groups, providing enough space and comfort for everyone.',
        },
    };
  
    const renderTabContent = () => {
        const { title, description } = roomDetails[activeTab];
        return (
            <>
            <FaBed size={30} className="mb-2 text-primary" />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/contact" className="btn btn-primary">Book Now</a>
            </>
        );
    };

    return (
        <>
            <CustomNavbar />
            {/* Hero Section */}
            <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
                <div className="hero-overlay">
                <h1 className="text-center text-white fw-bold">Room Features & Amenities</h1>
                <p className="text-center text-white">Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.</p>
                </div>
            </div>

            <section className="container mt-5 mb-5 py-5 bg-light" style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)' }}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-warning-emphasis">Rooms & Guest House</h2>
                    <p className="text-muted">
                    Experience a relaxing stay at Udawalawa Elegarden Hotel, where comfort meets nature. Whether you're traveling solo, as a couple, or with family, we have the perfect room for you.
                    </p>
                </div>

                {/* Room Types */}
                <div className="card text-center shadow">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 'single' ? 'active' : ''}`} onClick={() => setActiveTab('single')}>Single</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 'double' ? 'active' : ''}`} onClick={() => setActiveTab('double')}>Double</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 'triple' ? 'active' : ''}`} onClick={() => setActiveTab('triple')}>Triple</button>
                        </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {renderTabContent()}
                    </div>
                </div>

                {/* Features */}
                <div className="row mb-5 mx-5">
                    <div className="col-md-6">
                        <h4 className="fw-semibold mb-3 text-primary-emphasis">Room Features & Amenities</h4>
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
                        <h4 className="fw-semibold mb-3 text-primary-emphasis">Complimentary Items & Services</h4>
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
                        With peaceful surroundings, clean and well-equipped rooms, and friendly service, Udawalawa Elegarden Hotel is your perfect home near Udawalawa National Park.
                    </p>
                </div>
            </section>
        </>
    
    );
};

export default RoomsSection;
