import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { emailValidator, passwordValidator } from "../../components/Validator";
import "./loginpage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    grant_type: "password",
  });

  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );
    // setsuccessMessage('Successfully Validated');
    if (
      input.email !== "balubujugani@gmail.com" ||
      input.password !== "Balu@123"
    )
      return seterrorMessage("Invalid email or password");
    navigate("/submit");
    localStorage.setItem("auth", true);
  };

  return (
    <>
      <div className=" log-container">
       <Link to ='/'> <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="63"
            height="63"
            rx="31.5"
            stroke="#CACACA"
          />
          <g clip-path="url(#clip0_11_215)">
            <path
              d="M40 24L24 40"
              stroke="#0C1319"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 24L40 40"
              stroke="#0C1319"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_11_215">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(16 16)"
              />
            </clipPath>
          </defs>
        </svg>
        </Link>

        <form className="login-form validate-form" onSubmit={formSubmitter}>
          <div className="login-form-title">
            <p> Registration Form</p>
            <h4>Start your success</h4>
            <h4>Journey here!</h4>
          </div>
          {errorMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "red" }}>
              {errorMessage}
            </div>
          )}
          {successMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "green" }}>
              {successMessage}
            </div>
          )}
          <div
            className="wrap-input validate-input m-b-23"
            data-validate="email is required"
          >
            <input
              className="input  "
              type="email"
              name="email"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <span className="focus-input100" data-symbol="" />
          </div>
          <div className=" validate-input" data-validate="Password is required">
            <input
              className="input "
              type="password"
              name="password"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <span className="focus-input100" data-symbol="" />
          </div>
          <div className="btn-container">
            <button className="btn">
              <Link to="/submit" style={{ color: "white" }}>
                {" "}
                Submit
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

/* import {useState} from 'react'

const LoginPage = () => {
  const [count,setCount] = useState(0);

  const incrBtn = () => {
    setCount(count + 1);
  }

  const decrBtn = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={incrBtn}>+</button>
      {count}
      <button onClick={decrBtn}>-</button>
    </div>
  )
}

export default LoginPage */
