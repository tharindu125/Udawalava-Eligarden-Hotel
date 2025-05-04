// src/pages/Home.jsx
import CustomNavbar from '../components/CustomNavbar';
import MainCarousel from '../components/MainCarousel';
import welcomeImage from '../assets/slider2.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <CustomNavbar />
      <div>
        <MainCarousel />
      </div>

      {/* Guest House */}
      <section className='container py-5'>
        <div className='row align-items-center'>
          {/* Text Content */}
          <div className='col-md-6 mb-4 mb-md-0'>
            <h2 className='h3 fw-bold mb-3 text-dark'>Room Features & Amenities</h2>
            <p className='text-muted mb-3'>
              At Udawalawa Elegarden Hotel, we offer a peaceful stay with nature just outside your window. Whether you're traveling alone, as a couple, or with 
              family, our Single, Double, and Triple rooms are designed to match your needs with comfort and privacy.
            </p>
            <p className='text-muted'>
              All rooms include air conditioning or fan, attached bathroom with hot water, free Wi-Fi, outdoor sitting space, and a designated smoking area. You’ll also 
              find soap, towels, fresh bedding, and a hair dryer ready in your room.
            </p>
            <p>Enjoy free laundry and room service with no extra fees – because your comfort is always our priority.</p>
            <Link to="/RoomDetails" className="btn btn-primary">More Details</Link>
          </div>

          {/* Image */}
          <div className='col-md-6'>
            <img
              src={welcomeImage}
              alt='Room Features & Amenities'
              className='img-fluid rounded shadow'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
            />
          </div>
        </div>
      </section>

      {/* Guest House */}
      <section className='container py-5 bg-light' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div className='row align-items-center'>
          {/* Image */}
          <div className='col-md-6'>
            <img
              src={welcomeImage}
              alt='Delicious Local & International Restaurant'
              className='img-fluid rounded shadow'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
            />
          </div>
          {/* Text Content */}
          <div className='col-md-6 mb-4 mb-md-0'>
            <h2 className='h3 fw-bold mb-3 text-dark'>Delicious Local & International Restaurant</h2>
            <p className='text-muted mb-3'>
              Start your day with a hearty breakfast, relax with a satisfying lunch, or unwind with a flavorful dinner — all freshly prepared by our 
              skilled chefs using local ingredients. Whether you prefer to dine in and enjoy the serene atmosphere or grab a quick takeaway, we cater to your needs.
            </p>
            <p className='text-muted'>
              Our menu brings together the best of both worlds — from authentic Sri Lankan dishes to popular international favorites, there's something to please every palate.
            </p>
            <p className='text-muted'>
              Looking for something cool and sweet? Treat yourself to a selection of ice creams and refreshing beverages, perfect for a hot Udawalawa afternoon.
            </p>
            <Link to="/Restaurant" className="btn btn-primary">More Details</Link>
          </div>
        </div>
      </section>

      {/* Guest House */}
      <section className='container py-5'>
        <div className='row align-items-center'>
          {/* Text Content */}
          <div className='col-md-6 mb-4 mb-md-0'>
            <h2 className='h3 fw-bold mb-3 text-dark'>Wildlife Adventures : Udawalawe Safari Tours</h2>
            <p className='text-muted mb-3'>
              Embark on an unforgettable journey with our Udawalawe Safari Tours the perfect way to experience Sri Lanka’s wild beauty. Home to a thriving population 
              of Asian elephants.
            </p>
            <p className='text-muted'>
              Spanning over 30,821 hectares, the park lies at the intersection of the dry and wet zones, stretching across both Uva and Sabaragamuwa provinces. 
              This diverse ecosystem makes it a haven for a wide variety of wildlife and plant life.
            </p>
            <p className='text-muted'>
              In addition to elephants, the park is home to a rich array of birds, reptiles, amphibians, mammals, and fish. You may even spot rare creatures like wild cats, 
              and during certain seasons, migratory birds add extra color to the landscape.
            </p>
            <p className='text-muted'>
              One unique feature of this park is the presence of Sri Lanka’s only known dwarf elephant, an extremely rare and fascinating species found nowhere else in South Asia.
            </p>
            <Link to="/Restaurant" className="btn btn-primary">More Details</Link>
          </div>

          {/* Image */}
          <div className='col-md-6'>
            <img
              src={welcomeImage}
              alt='Wildlife Adventures : Udawalawe Safari Tours'
              className='img-fluid rounded shadow'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

