import CustomNavbar from "../components/CustomNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Importing images
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider2.jpg";
import slider4 from "../assets/slider1.jpg";
import slider5 from "../assets/slider2.jpg";
import slider6 from "../assets/slider2.jpg";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

function Gallery() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div
        className="about-hero-section"
        style={{
          position: "relative",
          height: "400px",
          background: `url(${slider1}) no-repeat center center/cover`,
        }}
      >
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold">Gallery</h1>
          <p className="text-center text-white">
            Explore stunning moments from our hotel, surroundings, and guest
            experiences — a glimpse into your next unforgettable stay.
          </p>
        </div>
      </div>

      <div className="gallery-container" style={{ paddingTop: "70px" }}>
        <Container>
          <Row className="mt-4">
            {images.map((image, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                <Card className="p-0">
                  <Card.Img
                    variant="top"
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Container fluid className="d-flex justify-content-center">
          <ImageList
            sx={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
            }}
            variant="woven"
            cols={isMobile ? 1 : 3} // 👈 Responsive columns
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=600&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    transition: "0.3s",
                   
                  }}
                  className="hover-effect"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </div>
    </>
  );
}

export default Gallery;
