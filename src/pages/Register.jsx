import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/register.css";
export const Register = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper-register">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="uname"
            placeholder=" UserName"
          />

          <label htmlFor="password"></label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            name="pass"
          />
          <label htmlFor="Confirm password"></label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            name="pass"
          />
          <button type="submit" class="btn-register  btn-success mt-3">
            REGISTER
          </button>
        </form>
        <Link className="btn btn-primary" to="login">
          Already have an account? Login here.
        </Link>
      </div>
    </div>
  );
};
