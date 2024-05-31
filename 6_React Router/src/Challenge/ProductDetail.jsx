import React from 'react';
import { useParams } from 'react-router';
import productsData from './productsData';

function ProductDetail(props) {
  const { productID } = useParams();

  const currentId = productsData.find(product => product.id == productID)

  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>
        {currentId.name} - Price: {currentId.price}$
      </h3>
      <p>Description: 
        <br />
        {currentId.description}
      </p>
    </div>
  )
}

export default ProductDetail