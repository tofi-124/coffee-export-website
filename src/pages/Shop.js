import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import './Shop.css';

const products = [
  {
    id: 1,
    name: 'Yirgacheffe Natural Process',
    region: 'Yirgacheffe',
    process: 'Natural',
    description: 'Floral, bergamot, stone fruit notes with a clean finish',
    price: 24.00,
    image: '/images/products/yirgacheffe-natural.jpg',
    category: 'specialty'
  },
  {
    id: 2,
    name: 'Sidamo Washed',
    region: 'Sidamo',
    process: 'Washed',
    description: 'Blueberry, dark chocolate notes with a wine-like finish',
    price: 22.00,
    image: '/images/products/sidamo-washed.jpg',
    category: 'specialty'
  },
  {
    id: 3,
    name: 'Fresh Coffee Cherries',
    region: 'Guji',
    process: 'Natural',
    description: 'Jasmine, tropical fruit, honey sweetness',
    price: 26.00,
    image: '/images/products/coffee-cherries.jpg',
    category: 'specialty'
  },
  {
    id: 4,
    name: 'Premium Coffee Beans',
    region: 'Harrar',
    process: 'Natural',
    description: 'Wild berry, mocha, spicy undertones',
    price: 23.00,
    image: '/images/products/coffee-beans-roasted.jpg',
    category: 'specialty'
  }
];

const filters = {
  regions: ['All', 'Yirgacheffe', 'Sidamo', 'Guji', 'Harrar'],
  processes: ['All', 'Natural', 'Washed', 'Honey'],
  categories: ['All', 'Specialty', 'Commercial']
};

function Shop() {
  const [activeFilters, setActiveFilters] = useState({
    region: 'All',
    process: 'All',
    category: 'All'
  });
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => {
    return (activeFilters.region === 'All' || product.region === activeFilters.region) &&
           (activeFilters.process === 'All' || product.process === activeFilters.process) &&
           (activeFilters.category === 'All' || product.category === activeFilters.category.toLowerCase());
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <h1>Our Coffee</h1>
          <p>Exceptional Ethiopian coffee, sourced directly from farmers</p>
        </div>
      </section>

      <section className="shop-content">
        <div className="container">
          <div className="shop-filters">
            <div className="filter-group">
              <label>Region</label>
              <select 
                value={activeFilters.region} 
                onChange={(e) => setActiveFilters({...activeFilters, region: e.target.value})}
              >
                {filters.regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Process</label>
              <select 
                value={activeFilters.process}
                onChange={(e) => setActiveFilters({...activeFilters, process: e.target.value})}
              >
                {filters.processes.map(process => (
                  <option key={process} value={process}>{process}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <ImageLoader src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-meta">
                    <span className="region">{product.region}</span>
                    <span className="process">{product.process}</span>
                  </div>
                  <div className="product-footer">
                    <span className="price">${product.price.toFixed(2)}</span>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;