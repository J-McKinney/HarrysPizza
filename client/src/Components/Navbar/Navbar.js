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

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const myref = React.useRef(null);

  function handleClick() {
    myref.current.classList.add("toggled");
  }

  return (
    <>
      <div className={Styles.wrapper}>
        <Navbar color="faded" light>
          <NavbarBrand className="me-auto" href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler
            className="me-2"
            onClick={() => {
              setIsOpen(!isOpen);
              handleClick();
            }}
          />
          <Collapse navbar isOpen={isOpen} ref={myref}>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
