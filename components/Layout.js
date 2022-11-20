import Nav from "./Nav";
import React from "react";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="full-body">
        <Nav />
        <main className="main-body">{children}</main>
      </div>
    </>
  );
};

export default Layout;
