import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Styles from "./Landing.module.css";

function Landing() {
  useEffect(() => {
    ScrollReveal().reveal("#reveal1", {
      delay: 250,
      reset: true,
      duration: 1000,
      easing: "ease-in",
      distance: "50px",
      origin: "top",
    });
  }, []);
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.bgImg}>
          <div id="reveal1" className={Styles.banner1}>
            <h1 className={Styles.title1}>Harry's Pizza and Subs</h1>
          </div>
        </div>
        {/* <div style={{ height: "1000px" }}>what</div> */}
      </div>
    </>
  );
}

export default Landing;
