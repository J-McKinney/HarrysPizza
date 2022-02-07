import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse,
} from "reactstrap";
import { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";

function NavBar() {
  const [open, setOpen] = useState;

  const toggle = () => {
    
  }

  return (
    <>
      <div className={Styles.wrapper}>
        <Navbar color="faded" light>
          <NavbarBrand className="me-auto" href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
          <Collapse navbar>
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
