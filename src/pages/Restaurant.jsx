import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';
import food from '../assets/Restaurent.jpg'
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';

function Restaurant() {
  const foodMenus = {
    Breakfast: ['Sri Lankan String Hoppers', 'Milk Rice', 'Omelette Toast', 'Tea / Coffee'],
    Lunch: ['Rice & Curry', 'Chicken Fried Rice', 'Vegetable Kottu', 'Seafood Noodles'],
    Dinner: ['Devilled Chicken', 'Grilled Fish', 'Vegetable Soup', 'Fried Rice with Egg'],
    Beverages: ['Fresh Juice', 'Milkshake', 'King Coconut', 'Soda / Soft Drinks'],
    'Ice Creams': ['Vanilla Delight', 'Chocolate Sundae', 'Fruit & Nut', 'Strawberry Swirl'],
    // 'Dine-In & Takeaway': ['Available for All Items', 'Fast Packaging', 'Eco-friendly Containers'],
  };
  
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
        <Container className="py-3">
          <h2 className="text-center mb-3 fw-bold display-6 text-warning-emphasis">Experience Taste & Quality in Every Bite</h2>
          <p className="text-center text-muted mb-5 px-3">
            Whether you're dining in or taking away, we serve freshly prepared meals with no MSG or artificial flavors — all packed in eco-friendly containers. Enjoy delicious food that’s kind to your body and the planet.
          </p>
          <Row className="g-4">
            {Object.keys(foodMenus).map((category, idx) => (
              <Col xs={12} md={6} key={idx}>
                <Card className="shadow-sm p-0 bg-light">
                  <Card.Body className='pb-5'>
                  <div className="position-relative">
                    <Card.Img variant="top" src={food} alt={category} className="restaurent_image" />
                    <span
                      className="position-absolute top-0 start-0 text-white px-3 py-1 rounded-end border shadow fs-5"
                      style={{ marginTop: '10px', marginLeft: '10px', fontSize: '0.8rem', backgroundColor: 'rgba(78, 60, 1, 0.55)', textShadow: '2px 2px 4px rgba(255, 213, 0, 0.5)' }}
                    >
                      Dine-In & Takeaway
                    </span>
                  </div>
                    <Card.Title className="text-primary-emphasis px-5 fs-3 manual_text_center mt-3">{category}</Card.Title>
                    <Card.Text className="text-muted mb-2 px-5 manual_text_center">Explore our delicious {category} options.</Card.Text>  
                    <Accordion flush className='mx-3 mt-3 border shadow-sm'>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>View Menu</Accordion.Header>
                        <Accordion.Body>
                          <ul className="mb-0">
                            {foodMenus[category].map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Call to Action */}
          <div className="cta-section text-center mb-3 shadow">
            <h3 className='fw-bold text-warning-emphasis'>Ready to Experience the Best?</h3>
            <p>Join us for an unforgettable experience. Book a tour with us today!</p>
            <Button variant="primary" href="/contact#book_now">Book Now</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Restaurant;
