import CustomNavbar from '../components/CustomNavbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Importing images
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider2.jpg';
import slider4 from '../assets/slider1.jpg';
import slider5 from '../assets/slider2.jpg';
import slider6 from '../assets/slider2.jpg';

function Gallery() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white">Gallery</h1>
          <p className="text-center text-white">Explore our beautiful hotel through our gallery.</p>
        </div>
      </div>

      <div className="gallery-container" style={{ paddingTop: '70px' }}>
        <Container>
            <Row className='mt-4'>
                {images.map((image, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                    <Card className='p-0'>
                    <Card.Img variant="top" src={image} alt={`Gallery Image ${index + 1}`} />
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
      </div>
    </>
  );
}

export default Gallery;
