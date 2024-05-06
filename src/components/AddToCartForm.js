import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../services/api";

const AddToCartForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: 3,
    name: "",
    price: "",
    totalPrice: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({
      id: formData.id + 1,
      name: "",
      price: "",
      totalPrice: "",
      image: "",
      category: "",
    });
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <label>Name: </label>
              <br></br>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
              />
            </div>
            <div>
              <label>Price: </label>
              <br></br>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </div>
            <div>
              <lable>Total Price: </lable>
              <br></br>
              <input
                type="text"
                name="image"
                value={formData.totalPrice}
                onChange={handleChange}
                placeholder="total price"
              />
            </div>
            <div>
              <label>Category: </label>
              <br></br>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "24px",
            }}
          >
            <button
              type="submit"
              style={{
                background: "gray",
                color: "white",
                width: "30%",
                height: "40px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToCartForm;
