import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import Home from "./components/Home";
import Products from "./components/products/Products";
import ProductsDetails from "./components/products/ProductsDetails";

const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route
            path="/home"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          />{" "}
          <Route path="/home" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Home />;
};

export default App;
