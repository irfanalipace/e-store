import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "../features/products/productsSlice";
import "./Monte.css";
import product from "../assets/product1.jpg";

const Monte = () => {
  const dispatch = useDispatch();
  const localStorageItems = JSON.parse(localStorage.getItem("list"));
  const items = useSelector((state) => state.product.items);

  return (
    <div>
      <div className="container">
        <div className="row">
          {localStorageItems?.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <img
                  className="card-img-top"
                  src={product}
                  alt="products card"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.category}</p>
                  <h5 className="card-title">{item.quantity}</h5>
                  <p className="card-text">{item.category}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monte;
