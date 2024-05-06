import React, { useEffect, useState } from "react";
import {
  addProducts,
  loadProducts,
} from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import imge1 from "../../assets/desktop_slider_2.webp";
import imge2 from "../../assets/horecastore_desktop.webp";
import imge3 from "../../assets/d_banner_2_73c01c2b-d8ab-4d0c-b506-c35e51878d23.webp";
import imge4 from "../../assets/websire_banner_d_copy.webp";
import ProductsList from "./ProductsList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const [productname, setProductsName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const products = useSelector((state) => state.products.products);
  const storedItems = JSON.parse(localStorage.getItem("products")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), productname, name, age, address };

    dispatch(addProducts(newProduct));
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem(
      "products",
      JSON.stringify([...storedProducts, newProduct])
    );

    setProductsName("");
    setAddress("");
    setAge("");
    setName("");
  };

  return (
    <div className="data-seteele-image">
      <Carousel>
        <div>
          <img src={imge1} />
        </div>
        <div>
          <img src={imge2} />
        </div>
        <div>
          <img src={imge3} />
        </div>
        <div>
          <img src={imge4} />
        </div>
      </Carousel>
      {products & (products.length > 0) ? (
        <ProductsList item={products} />
      ) : (
        <ProductsList item={storedItems} />
      )}
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <form onSubmit={handleSubmit}>
          <h4>Add Products</h4>
          <div>
            <label>Products Name</label>
            <br></br>
            <input
              type="text"
              value={productname}
              placeholder="add products"
              onChange={(e) => setProductsName(e.target.value)}
            />
          </div>
          <div>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              value={name}
              placeholder="add products"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Age</label>
            <br></br>
            <input
              type="text"
              value={age}
              placeholder="add products"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label>Address</label>
            <br></br>
            <input
              type="text"
              value={address}
              placeholder="add products"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{ margin: "12px", background: "green", color: "white" }}
          >
            Add Products
          </button>
          <button
            type="submit"
            style={{ margin: "12px", background: "green", color: "white" }}
          >
            Edit Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;
