
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from './products';
import { useFilter } from '../../context/FilterContext';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ShopPage.css';

const ShopPage = () => {
  const location = useLocation();
  const { filters, updateFilters } = useFilter();
  // Removed addToCart from here as it's now in ProductCard

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    updateFilters({ [name]: value });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === 'All' || product.category === filters.category) &&
      (filters.size === 'All' || product.size === filters.size)
    );
  });

  return (
    <div className="shoppage">
      <aside className="filters">
        <h3>Filters</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', marginBottom: '1.5rem' }}>
          Refine your search by selecting categories and sizes.
        </p>
        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Gaming">Gaming</option>
            <option value="Office">Office</option>
            <option value="Artist">Artist</option>
            
            <option value="Travel">Travel</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="size">Size</label>
          <select
            id="size"
            name="size"
            value={filters.size}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>
      </aside>
      <main className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default ShopPage;
