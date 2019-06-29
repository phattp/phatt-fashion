import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${props => props.theme.colorPrimary};
  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorPrimary};
  }
  :hover,
  :active {
    color: ${props => props.theme.colorBlueDark};
  }
`;

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className="pt-3 pb-3"
      style={{ boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.2)" }}
    >
      <StyledLink to="/">
        <Navbar.Brand>Phatt</Navbar.Brand>
      </StyledLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <StyledLink to="/listings" className="mr-4">
            Woman
          </StyledLink>
          <StyledLink to="/listings" className="mr-4">
            Men
          </StyledLink>
        </Nav>
        <Form className="m-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <StyledLink to="/signup" className="mr-4">
            Sign Up
          </StyledLink>
          <StyledLink to="/login" className="mr-4">
            Log In
          </StyledLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
