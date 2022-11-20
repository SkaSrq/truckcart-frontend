import { useState } from "react";

export default function Login() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = () => {
    if (password.length >= 6 && password.length <= 16) {
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    if (validatePassword()) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
      // setPasswordErrorMessage("Password should contain at least six character");
    }
  };
  return (
    <div className="single-page">
      <div className="login-wrapper">
        <div className="login-header">Sign in</div>
        <div
          className={
            isValidEmail
              ? "login-input input-helper"
              : "login-input input-helper vibrate"
          }
        >
          <input
            className="input"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={(e) => {
              e.preventDefault();
              setIsValidEmail(true);
            }}
          ></input>
          <span className="focus-input"></span>
        </div>
        <div
          className={
            isValidPassword
              ? "login-input input-helper"
              : "login-input input-helper vibrate"
          }
        >
          <input
            className="input"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={(e) => {
              e.preventDefault();
              setIsValidPassword(true);
            }}
          ></input>
          <span className="focus-input"></span>
        </div>
        <div className="login-log">
          <div className="login-checkbox">
            <input type="checkbox" id="scales" name="scales" />
            <label for="scales">Remember me</label>
          </div>
          <span className="forgot-password">Forgot Password?</span>
        </div>
        <button type="submit" className="login-btn" onClick={handleSubmit}>
          Login
        </button>

        <span className="signup-btn">
          Don't have an account?<a href="/signup">Create Account</a>
        </span>
      </div>
      <div className="login-bottom">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    </div>
  );
}
