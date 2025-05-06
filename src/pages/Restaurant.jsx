import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';

function Restaurant() {
  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold">Delicious Local & International Restaurant</h1>
          <p className="text-center text-white">Looking for something cool and sweet? Treat yourself to a selection of ice creams and refreshing beverages, perfect for a hot Udawalawa afternoon.</p>
        </div>
      </div>

      <div style={{ paddingTop: '70px' }}>
            <h1>Restaurant</h1>
      </div>
    </>
  );
}

export default Restaurant;
