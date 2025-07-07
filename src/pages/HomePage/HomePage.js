import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { useFilter } from '../../context/FilterContext';

const HomePage = () => {
  const { updateFilters } = useFilter();
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <section className="hero">
        <h1>MouseMuse</h1>
        <p>Where style meets precision.</p>
        <Link to="/shop" className="cta-button">Shop Now</Link>
      </section>

      <section className="featured-categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <div onClick={() => navigate('/shop', { state: { category: 'Gaming' } })}>
              <img src="https://c1.neweggimages.com/productimage/nb640/AG29D2305030YQ894E4.jpg" alt="Gaming Mousepads" />
              <h3>Gaming Series</h3>
            </div>
          </div>
          <div className="category-card">
            <div onClick={() => navigate('/shop', { state: { category: 'Office' } })}>
              <img src="https://m.media-amazon.com/images/I/61nSvG2CHQL._UF894%2C1000_QL80_.jpg" alt="Office Mousepads" />
              <h3>Office Elegance</h3>
            </div>
          </div>
          <div className="category-card">
            <div onClick={() => navigate('/shop', { state: { category: 'Artist' } })}>
              <img src="https://m.media-amazon.com/images/I/61y2I05UFWL.jpg" alt="Artist Mousepads" />
              <h3>Artist Pads</h3>
            </div>
          </div>
          
        </div>
      </section>

      <section className="promotion">
        <h2>Summer Sale!</h2>
        <p>Get <strong>20% off</strong> all gaming mousepads. Use code: <strong>SUMMER20</strong></p>
      </section>
    </div>
  );
};

export default HomePage;


