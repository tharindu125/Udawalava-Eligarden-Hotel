import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/slider1.jpg';
import food from '../assets/Restaurent.jpg'
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { useState } from 'react';


const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    {
      title: 'RI LANKAN TRADITIONAL RICE & CURRY',
      description:
        'Savor the authentic taste of Sri Lanka with a plate of steamed rice, served with three flavorful vegetable curries. Choose from prawns, fish or beef.',
      price: 'Rs: 1000',
      image: food,
      category: 'Lunch and Dinner',
    },
    {
      title: 'Vegetarian Kottu',
      description:
        'Chopped paratha roti stir-fried with vegetables and spices. Perfect for a quick meal.',
      price: 'Rs:800',
      image: food,
      category: 'Lunch and Dinner',
    },
    {
      title: 'Cheese Kottu',
      description:
        'Chopped paratha roti, savory spices & cheese. A satisfying and flavorful street food.',
      price: 'Rs:1300',
      image: food,
      category: 'Brunch',
    },
    {
      title: 'Seafood Kottu',
      description:
        'Kottu mixed with seafood and bold spices. Irresistible and spicy!',
      price: 'Rs:1500',
      image: food,
      category: 'Brunch',
    },
    {
      title: 'Vegetarian basil/pasto',
      description:
        'Perfectly cooked pasta with rich sauce. Topped with parmesan for elegance.',
      price: 'Rs:800',
      image: food,
      category: 'Lunch and Dinner',
    },
    {
      title: 'Spaghetti cabonara/bolognese',
      description:
        'Served with a touch of rich savory sauce. Classic Italian delight!',
      price: 'Rs:1400',
      image: food,
      category: 'Dinner',
    },
  ];

  const categories = ['All', 'Lunch and Dinner', 'Brunch', 'DRINKS', 'DESSERTS'];

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Delicious Local & International Restaurant</h1>
          <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
            Looking for something cool and sweet? Treat yourself to a selection of ice creams and refreshing beverages, perfect for a hot Udawalawa afternoon.
          </p>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">Menu</h2>
          <p className="text-center text-muted mb-4">Check Our Tasty Menu</p>

          <div className="text-center mb-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`btn btn-sm me-2 mb-2 ${
                  selectedCategory === cat ? 'btn-dark' : 'btn-outline-dark'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredItems.map((item, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="d-flex align-items-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-circle me-3"
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1 border-bottom pb-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-bold text-uppercase">{item.title}</h6>
                      <span className="badge bg-light text-dark">{item.price}</span>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
