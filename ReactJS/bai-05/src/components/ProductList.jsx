import React from 'react';
import './ProductList.css';
import reactLogo from '../assets/react.svg';

function ProductList() {
  const products = [
    { id: 1, name: 'Sản phẩm 1', price: '100.000đ' },
    { id: 2, name: 'Sản phẩm 2', price: '200.000đ' },
    { id: 3, name: 'Sản phẩm 3', price: '300.000đ' },
    { id: 4, name: 'Sản phẩm 4', price: '400.000đ' },
    { id: 5, name: 'Sản phẩm 5', price: '500.000đ' },
    { id: 6, name: 'Sản phẩm 6', price: '600.000đ' }
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={reactLogo} alt="React Logo" className="product-img" />
          <h3>{product.name}</h3>
          <p style={{ color: '#ff4d4f', fontWeight: 'bold' }}>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;