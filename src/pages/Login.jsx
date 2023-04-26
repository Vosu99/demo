import React, { useEffect, useState } from "react";
import "../Style/login.css";
import { Link, Navigate } from "react-router-dom";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setThis] = useState(false);

  const [currentForm, setCurrentForm] = useState("login");

  const information = {
    username: name,
    password: password,
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = fetch("https://localhost:7225/api/User/Login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(information),
  //   });
  //   console.log(JSON.stringify(res));
  // };

  const url = "https://localhost:7225/api/User/Login";

  async function handleLogin() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(information),
        });
        resolve(res);
      }, 1000);
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await handleLogin().then(function (result) {
      return result.json();
    });
    console.log(data);
    localStorage.setItem("jwtToken", data.data);
    if (data && data.status == true) {
      setThis(true);
    }
    console.log(localStorage.getItem("jwtToken"));
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="wrapper-login">
      {user && <Navigate to="/home" replace={true} />}
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label-form" htmlFor="username"></label>
          <input
            type="name"
            name="name"
            placeholder=" UserName"
            onChange={(e) => handleOnChangeName(e)}
            value={name}
          />
          <label className="label-form" htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleOnChangePassword(e)}
            value={password}
          />
          <button className="btn btn-primary mt-3" type="submit">
            Login
          </button>
        </form>
        <Link className="btn btn-primary" to="register">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};
