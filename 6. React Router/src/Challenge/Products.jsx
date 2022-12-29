import React from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData";

function Products() {
  const allProducts = productsData.map((product) => (
    <div key={product.id}>
    <h3>
      <Link to={`/products/${product.id}`}>
      {product.name}
      </Link>
    </h3>
    <hr />
    </div>
  ));

  return (
    <div>
      <h1>Products List Page</h1>
      {allProducts}
    </div>
  );
}

export default Products;
