import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();

  const storedItems = JSON.parse(localStorage.getItem("products")) || [];

  console.log(storedItems, "selectedproducts");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = storedItems.find(
      (product) => product.id === parseInt(id)
    );

    setProduct(selectedProduct);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {product.id}</p>
      <p>Product Name: {product.productname}</p>
      <p>Name: {product.name}</p>
      <p>Age: {product.age}</p>
      <p>Address: {product.address}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductDetails;
