import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import Styles from "./Landing.module.css";

function Landing() {
  return (
    <>
      <div className={Styles.wrapper}>
        <NavBar />
        <h1>Landing</h1>
      </div>
    </>
  );
}

export default Landing;
