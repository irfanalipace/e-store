import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productsSlice";

const dummyData = [
  {
    id: 1,
    name: "Dummy Product 1",
    price: 10,
    quantity: 12,
    totalPrice: 10,
    image: "dummy_image_url_1",
    category: "Dummy Category 1",
  },
];

const AddDummyData = () => {
  const dispatch = useDispatch();
  localStorage.setItem("list", JSON.stringify(dummyData));
  return null;
};

export default AddDummyData;
