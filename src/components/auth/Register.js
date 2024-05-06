import React from "react";
import { useState } from "react";
import { register } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [creidential, setCreidential] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreidential({ ...creidential, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(creidential));
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h4>Register</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              value={creidential.username}
              placeholder="Enter User Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <br></br>
            <input
              type="text"
              name="password"
              value={creidential.password}
              placeholder="Enter User Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
