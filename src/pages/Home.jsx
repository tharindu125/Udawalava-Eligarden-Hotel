// src/pages/Home.jsx
import CustomNavbar from '../components/CustomNavbar';
import MainCarousel from '../components/MainCarousel';

function Home() {
  return (
    <>
      <CustomNavbar />
      <div style={{ paddingTop: '70px' }}>
        <MainCarousel />
      </div>
    </>
  );
}

export default Home;
