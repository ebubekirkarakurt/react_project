import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> My React Project </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavLink href="/">Go Back Home Page</NavLink>
            <NavLink href="https://github.com/ebubekirkarakurt/react_project/tree/master">
              Github Repository
            </NavLink>
            <CartSummary
              removeFromCart={props.removeFromCart}
              cart={props.cart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
