import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
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
    } else return false;
  };
  const handleSubmit = (e) => {
    console.log("button Clicked.");
    e.preventDefault();
    if (validateEmail()) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    if (validatePassword()) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
      setPasswordErrorMessage("Password should contain at least six character");
    }
    if (validEmail && validatePassword()) {
      alert("ALL OK");
    }
  };
  return <div className="main-page"></div>;
}
