import CustomNavbar from '../components/CustomNavbar';
import slider1 from '../assets/restaurent_wallpaper_01.jpg';
import food from '../assets/Restaurent.jpg';
import Sandwich from '../assets/Restaurent-Sandwich.jpg';
import Milk_Rice from '../assets/Restaurent-Milk-Rice.jpg';
import Lavariya from '../assets/Restaurent-Lavariya.jpg';
import Traditional_Rice_Curry from '../assets/Restaurent-Traditional-Rice-&-Curry.jpg';
import Fried_Rice from '../assets/Restaurent-Fried-Rice.jpg';
import Mix_Rice from '../assets/Restaurent-Mix-Rice.jpg';
import Chicken_Fried_Rice from '../assets/Restaurent-Chicken-Rice.jpg';
import Grilled_Fish from '../assets/Restaurent-Grilled Fish.jpg';
import Burger from '../assets/Restaurent-Burger.jpg';
import Grilled_Chicken from '../assets/Restaurent-Grilled-Chicken.jpg';  
import Roti from '../assets/Restaurent-Roti.jpg';
import String_Hoppers from '../assets/Restaurent-String-Hoppers.jpg';
import Noodles from '../assets/Restaurent-Noodles.jpg';
import Ceylon_Tea from '../assets/Ceylon-Tea.jpg';
import Ceylon_Coffee from '../assets/Restaurent-Ceylon-Coffee.jpg';
import Americano from '../assets/Restaurent-Americano.jpg';
import Cappuccino from '../assets/Restaurent-Cappuccino.jpg';
import Latte from '../assets/Restaurent-Latte.jpg';
import Mocha from '../assets/Restaurent-Mocha.jpg';
import Milk_Tea from '../assets/Restaurent-Milk-Tea.jpg';
import Cardomam_Tea from '../assets/Restaurent-Cardomam-Tea.jpg';
import Ginger_Tea from '../assets/Restaurent-Ginger-Tea.jpg';
import Hot_Chocolate from '../assets/Restaurent-Hot-Chocolate.jpg';
import Milkshake from '../assets/Restaurent-Milkshake.jpg';
import Watermelon from '../assets/Restaurent-Watermelon.jpg';
import Papaya from '../assets/Restaurent-Papaya.jpg';
import Pineapple from '../assets/Restaurent-Pineapple.jpg';
import Lime from '../assets/Restaurent-Lime.jpg';
import Avocado from '../assets/Restaurent-Avocado.jpg';
import mango from '../assets/Restaurent-mango.jpg';
import Wood_Apple from '../assets/Restaurent-Wood-Apple.jpg';
import Vanila from '../assets/Restaurent-Vanila-Ice-Cream.jpg';
import Chocolate from '../assets/Restaurent-Vanila-Ice-Cream.jpg';
import Fruit_Nut from '../assets/Restaurent-Fruit-and-Nuts-Ice-Cream.jpg';
import Faluda from '../assets/Restaurent-Falooda-Ice-Cream.jpg';
import Mix from '../assets/Restaurent-Mix-Ice-Cream.jpg'
import Restaurent_Macaroni_with_cheese from '../assets/Restaurent-Macaroni-with-cheese.jpg';
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { useState } from 'react';


const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    {
      title: 'Sandwich',
      description:
        'A classic sandwich with fresh vegetables, cheese, and your choice of meat. Perfect for a quick bite.',
      price: 'Rs:0',
      image: Sandwich,
      category: 'Brunch',
    },
    {
      title: 'Sri Lankan Traditional Roti',
      description:
        'Soft and fluffy roti served with a side of spicy sambol. A traditional Sri Lankan favorite.',
      price: 'Rs:0',
      image: Roti,
      category: 'Brunch',
    },
    {
      title: 'Milk Rice',
      description:
        'Steamed rice served with a variety of sambols and curries. A staple in Sri Lankan cuisine.',
      price: 'Rs:0',
      image: Milk_Rice,
      category: 'Brunch',
    },
    {
      title: 'String Hoppers',
      description:
        'Delicate steamed rice noodles served with coconut milk and a side of sambol. A traditional breakfast dish.',
      price: 'Rs:0',
      image: String_Hoppers,
      category: 'Brunch',
    },
    {
      title: 'Lavariya',
      description:
        'Soft and fluffy roti served with a side of spicy sambol. A traditional Sri Lankan favorite.',
      price: 'Rs:0',
      image: Lavariya,
      category: 'Brunch',
    },
    {
      title: 'Noodles',
      description:
        'Stir-fried noodles with vegetables and your choice of meat. A quick and satisfying meal.',
      price: 'Rs:0',
      image: Noodles,
      category: 'Brunch',
    },
    {
      title: 'Sri Lankan Traditional Rice & Curry',
      description:
        'Savor the authentic taste of Sri Lanka with a plate of steamed rice, served with three flavorful vegetable curries. Choose from prawns, fish or beef.',
      price: 'Rs: 2000',
      image: Traditional_Rice_Curry,
      category: 'Lunch',
    },
    {
      title: 'Mixed Fried Rice',
      description:
        'A delightful mix of fried rice with vegetables, eggs, and your choice of chicken or prawns. A perfect meal for any time of the day.',
      price: 'Rs: 1800',
      image: Mix_Rice,
      category: 'Lunch',
    },
    {
      title: 'Chicken Fried Rice',
      description:
        'A delightful mix of fried rice with vegetables, eggs, and chicken. A perfect meal for any time of the day.',
      price: 'Rs: 1500',
      image: Chicken_Fried_Rice,
      category: 'Lunch',
    },
    {
      title: 'Egg Fried Rice',
      description:
        'A delightful mix of fried rice with vegetables, eggs, and your choice of chicken or prawns. A perfect meal for any time of the day.',
      price: 'Rs: 1200',
      image: Fried_Rice,
      category: 'Lunch',
    },
    {
      title: 'Vegetable Fried Rice',
      description:
        'A delightful mix of fried rice with vegetables, eggs, and your choice of chicken or prawns. A perfect meal for any time of the day.',
      price: 'Rs: 1200',
      image: Fried_Rice,
      category: 'Lunch',
    },
    {
      title: 'Grilled Chicken',
      description:
        'Juicy grilled chicken marinated with spices, served with a side of vegetables and rice. A hearty meal for lunch.',
      price: 'Rs: 3000',
      image: Grilled_Chicken,
      category: 'Lunch',
    },
    {
      title: 'Grilled Fish',
      description:
        'Freshly grilled fish seasoned with herbs and spices, served with a side of vegetables and rice. A healthy choice for lunch.',
      price: 'Rs: 3500',
      image: Grilled_Fish,
      category: 'Lunch',
    },
    {
      title: 'Noodles',
      description:
        'Stir-fried noodles with vegetables and your choice of meat. A quick and satisfying meal.',
      price: 'Rs: 1000',
      image: Noodles,
      category: 'Dinner',
    },
    {
      title: 'Burger + Cocacola + French fries',
      description:
        'A delicious burger served with a side of crispy French fries and a refreshing Coca-Cola. Perfect for a quick dinner.',
      price: 'Rs: 1800',
      image: Burger,
      category: 'Dinner',
    },
    {
      title: 'Macaroni with mozzarella cheese',
      description:
        'Creamy macaroni pasta baked with mozzarella cheese, served with a side of garlic bread. A comforting dinner option.',
      price: 'Rs: 1800',
      image: Restaurent_Macaroni_with_cheese,
      category: 'Dinner',
    },
    {
      title: 'Ceylon Coffee',
      description:
        'Coffee is a brewed beverage made from roasted coffee beans. It is one of the most popular beverages in the world.',
      price: 'Rs: 150',
      image: Ceylon_Coffee,
      category: 'Beverages',
    },
    {
      title: 'Ceylon Tea',
      description:
        'Tea is a beverage made by steeping cured or fresh tea leaves in hot water. It is one of the most popular beverages in the world.',
      price: 'Rs: 150',
      image: Ceylon_Tea,
      category: 'Beverages',
    },
    {
      title: 'Americano',
      description:
        'Americano is a coffee drink made by diluting espresso with hot water. It is one of the most popular coffee drinks in the world.',
      price: 'Rs: 500',
      image: Americano,
      category: 'Beverages',
    },
    {
      title: 'Cappuccino',
      description:
        'Cappeuccino is a coffee drink made with espresso, steamed milk, and milk foam. It is one of the most popular coffee drinks in the world.',
      price: 'Rs: 600',
      image: Cappuccino,
      category: 'Beverages',
    },
    {
      title: 'Latte',
      description:
        'Latte is a coffee drink made with espresso and steamed milk. It is one of the most popular coffee drinks in the world.',
      price: 'Rs: 600',
      image: Latte,
      category: 'Beverages',
    },
    {
      title: 'Mocha',
      description:
        'Mocha is a coffee drink made with espresso, steamed milk, and chocolate syrup. It is one of the most popular coffee drinks in the world.',
      price: 'Rs: 700',
      image: Mocha,
      category: 'Beverages',
    },
    {
      title: 'Milk Tea',
      description:
        'Milk tea is a beverage made by brewing black tea with milk and sugar. It is one of the most popular beverages in the world.',
      price: 'Rs: 200',
      image: Milk_Tea,
      category: 'Beverages',
    },
    {
      title: 'Cardomam Tea',
      description:
        'Cardamom tea is a beverage made by brewing black tea with cardamom and milk. It is one of the most popular beverages in the world.',
      price: 'Rs: 200',
      image: Cardomam_Tea,
      category: 'Beverages',
    },
    {
      title: 'Ginger Tea',
      description:
        'Ginger tea is a beverage made by brewing black tea with ginger and milk. It is one of the most popular beverages in the world.',
      price: 'Rs: 200',
      image: Ginger_Tea,
      category: 'Beverages',
    },
    {
      title: 'Hot Chocolate',
      description:
        'Hot chocolate is a beverage made by mixing cocoa powder, sugar, and milk. It is one of the most popular beverages in the world.',
      price: 'Rs: 300',
      image: Hot_Chocolate,
      category: 'Beverages',
    },
    {
      title: 'Iced Coffee',
      description:
        'Iced coffee is a beverage made by brewing coffee and then chilling it. It is one of the most popular beverages in the world.',
      price: 'Rs: 200',
      image: Milkshake,
      category: 'Beverages',
    },
    {
      title: 'Milkshake',
      description:
        'Milkshake is a beverage made by blending milk, ice cream, and flavorings. It is one of the most popular beverages in the world.',
      price: 'Rs: 400',
      image: Milkshake,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Watermelon',
      description:
        'Watermelon juice is a refreshing beverage made from fresh watermelon. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Watermelon,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Papaya',
      description:
        'Papaya juice is a refreshing beverage made from fresh papaya. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Papaya,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Pineapple',
      description:
        'Pineapple juice is a refreshing beverage made from fresh pineapple. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Pineapple,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Lime',
      description:
        'Lime juice is a refreshing beverage made from fresh lime. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Lime,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Avocado',
      description:
        'Avocado juice is a refreshing beverage made from fresh avocado. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Avocado,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - mango',
      description:
        'Mango juice is a refreshing beverage made from fresh mango. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: mango,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Wood Apple',
      description:
        'Wood apple juice is a refreshing beverage made from fresh wood apple. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Wood_Apple,
      category: 'Beverages',
    },
    {
      title: 'Fruit Juice - Mixed Fruit',
      description:
        'Milkshake is a beverage made by blending milk, ice cream, and flavorings. It is one of the most popular beverages in the world.',
      price: 'Rs: 500',
      iceCream: 'With Ice Cream Rs:800', 
      image: Lime,
      category: 'Beverages',
    },
    {
      title: 'Vanila Ice Cream',
      description:
        'Vanilla ice cream is a classic dessert made with cream, sugar, and vanilla flavoring. It is one of the most popular ice creams in the world.',
      price: 'Rs: 450',
      image: Vanila,
      category: 'Desserts',
    },
    {
      title: 'Chocolate Ice Cream',
      description:
        'Chocolate ice cream is a rich and creamy dessert made with chocolate, cream, and sugar. It is one of the most popular ice creams in the world.',
      price: 'Rs: 550',
      image: Chocolate,
      category: 'Desserts',
    },
    {
      title: 'Fruit & Nut Ice Cream',
      description:
        'Fruit and nut ice cream is a delightful dessert made with a mix of fresh fruits and crunchy nuts, blended into a creamy base. It is a popular choice for those who enjoy a combination of flavors and textures.',
      price: 'Rs: 600',
      image: Fruit_Nut,
      category: 'Desserts',
    },
    {
      title: 'Faluda Ice Cream',
      description:
        'Faluda ice cream is a traditional dessert made with vermicelli noodles, basil seeds, and rose syrup, topped with a scoop of ice cream. It is a popular choice in South Asian cuisine.',
      price: 'Rs: 550',
      image: Faluda,
      category: 'Desserts',
    },
    {
      title: 'Mix Ice Cream',
      description:
        'Mix ice cream is a delightful dessert that combines various flavors of ice cream into one scoop. It is a popular choice for those who enjoy a variety of tastes in their dessert.',
      price: 'Rs: 800',
      image: Mix,
      category: 'Desserts',
    },
  ];

  const categories = ['All', 'Brunch', 'Lunch', 'Dinner', 'Beverages', 'Desserts'];

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', width: '100vw', height: '400px', background: `url(${slider1}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Delicious Local & International Restaurant</h1>
          <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
            Looking for something cool and sweet? Treat yourself to a selection of ice creams and refreshing beverages, perfect for a hot Udawalawa afternoon.
          </p>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-2 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">Menu</h2>
          <p className="text-center text-muted mb-4" data-aos="zoom-in" data-aos-delay="200">Check Our Tasty Menu</p>

          <div className="text-center mb-4" data-aos="zoom-out" data-aos-delay="300">
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
              <div className="col-md-6 mb-4" key={index} data-aos="flip-up" data-aos-delay="400">
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
                    {item.iceCream && (
                        <p className="text-muted mb-1 mt-0" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
                          (🍨 {item.iceCream})
                        </p>
                      )}
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
