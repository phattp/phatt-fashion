import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: 800;
  color: ${props => props.theme.colorLogo};
  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorLogo};
  }
  :hover,
  :active {
    color: ${props => props.theme.colorPrimary};
  }
`;

const BrandLink = styled(Link)`
  font-family: "Raph Lanok Future";
  font-size: 2rem;
  color: ${props => props.theme.colorLogo};
  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorLogo};
  }
  :hover,
  :active {
    color: ${props => props.theme.colorLogo};
  }
  margin-right: 3rem;
`;

const Ctl = styled(Link)`
  font-weight: 800;
  padding: 5px 10px;
  margin-right: 3rem;
  background-color: ${props => props.theme.colorPrimary};
  color: ${props => props.theme.colorWhite};
  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorWhite};
  }
  :hover,
  :active {
    background-color: #d63131;
  }
`;

const StyledNavbar = styled(Navbar)`
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colorWhite};
  font-size: 1rem;
`;

const Header = () => {
  return (
    <StyledNavbar collapseOnSelect expand="lg" sticky="top">
      <BrandLink to="/">Phatt</BrandLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <StyledLink to="/products">Shop Now</StyledLink>
        </Nav>
        <InputGroup style={{ width: "60%", margin: "0 auto" }}>
          <FormControl
            placeholder="Search for items"
            aria-label="Search for items"
            aria-describedby="navbar-search"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
        <Nav className="align-items-center">
          <Ctl to="/signup">Sign Up</Ctl>
          <StyledLink to="/login">Log In</StyledLink>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
