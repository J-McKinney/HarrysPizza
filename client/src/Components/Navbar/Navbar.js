import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse,
} from "reactstrap";
import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.wrapper}>
        <Navbar color="faded" light>
          <NavbarBrand className="me-auto" href="/">
            Harry's Pizza
          </NavbarBrand>
          <NavbarToggler
            className="me-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Collapse navbar isOpen={isOpen}>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Menu/">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Specials/">Specials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
