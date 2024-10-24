import React, { useState } from 'react';

const ProductList = () => {
  //temporary static data
  const [availableProducts, setAvailableProducts] = useState([
    { id: 1, name: 'Chocolate Cake', quantity: 5 },
    { id: 2, name: 'Blueberry Muffin', quantity: 10 },
  ]);

  const [outOfStockProducts, setOutOfStockProducts] = useState([
    { id: 3, name: 'Vanilla Cupcake', quantity: 0 },
  ]);

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {availableProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>

      <h2>Out of Stock Products</h2>
      <ul>
        {outOfStockProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
