import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// reactstrap components
import {
  Card,
  CardTitle,
  Row,
  Col,
  // Table,
  // Button,
  // Label,
  // FormGroup,
} from "reactstrap";
import Styles from "./Landing.module.css";

function Landing() {
  useEffect(() => {
    ScrollReveal().reveal("#topDown", {
      delay: 250,
      reset: false,
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
          <div id="topDown" className={Styles.banner1}>
            <h1 className={Styles.title1}>Harry's Pizza and Subs</h1>
          </div>
        </div>
        <Row className={Styles.row}>
          <Col className={Styles.col} xs={11} md={5}>
            <Card className={Styles.card}>
              <CardTitle className={Styles.cardTitle} tag="h1">
                Discover
              </CardTitle>
              <CardTitle className={Styles.cardSubTitle} tag="h2">
                Our Story
              </CardTitle>
              <CardTitle className={Styles.cardSubTitle} tag="h5">
                Harry's Pizza & Subs is a family owned and operated Pizza
                Restaurant in Atlanta. We have the best New York style pizza in
                Atlanta, GA and that's why our customers keep coming back, week
                after week and year after year. Our specialty pizzas and subs
                are made to order with the finest meats, garden fresh vegetables
                and real cheese. We also serve wings, sandwiches, salads and a
                full selection of dinners. We offer delivery service, or you can
                pick up your pizza to take home. We're also a sit-down
                restaurant, so be sure to visit us! Have a corporate catering
                event? Be the hit at your next office luncheon with our catering
                platters that are sure to satisfy everyone in the office. Stop
                in or call us for lunch or dinner!
              </CardTitle>
            </Card>
          </Col>
          <Col className={Styles.col} xs={11} md={5}>
            <Card className={Styles.cardBG} />
          </Col>
        </Row>
        {/* <div style={{ height: "1000px" }}>what</div> */}
      </div>
    </>
  );
}

export default Landing;

// useEffect(() => {
//   ScrollReveal().reveal("#fromLeft", {
//     delay: 250,
//     reset: false,
//     duration: 1000,
//     easing: "ease-in",
//     distance: "50px",
//     origin: "left",
//   });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal("#fromRight", {
//     delay: 250,
//     reset: false,
//     duration: 1000,
//     easing: "ease-in",
//     distance: "50px",
//     origin: "right",
//   });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal("#btmUp", {
//     delay: 250,
//     reset: false,
//     duration: 1000,
//     easing: "ease-in",
//     distance: "50px",
//     origin: "bottom",
//   });
// }, []);
