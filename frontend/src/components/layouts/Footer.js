import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin
} from "react-icons/io";

const Wrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${props => props.theme.colorBlack};
  color: ${props => props.theme.colorGreyLight};
  font-weight: 300;
  font-size: 0.9rem;
`;

const SocialUL = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  & li {
    margin-right: 1rem;
  }
  & li:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled.a`
  &:visited,
  &:link {
    text-decoration: none;
    border: 0;
    color: ${props => props.theme.colorGreyLight};
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
  }
  &:hover,
  &:active {
    color: ${props => props.theme.colorPrimary};
  }
`;

const ContentUL = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
`;

const H2 = styled.h2`
  font-family: "Raph Lanok Future";
  font-size: 2.8rem;
  color: ${props => props.theme.colorGreyLight};
`;

const H3 = styled.h3`
  font-weight: 800;
  color: ${props => props.theme.colorGreyLight};
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <H2>Phatt</H2>
            <p>Copyright &copy; 2019 by Phatt Fashion. All rights reserved.</p>
            <SocialUL>
              <li>
                <StyledLink href="/">
                  <IoLogoFacebook size={28} />
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/">
                  <IoLogoInstagram size={28} />
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/">
                  <IoLogoTwitter size={28} />
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/">
                  <IoLogoLinkedin size={28} />
                </StyledLink>
              </li>
            </SocialUL>
          </Col>
          <Col lg={2}>
            <H3>Products</H3>
            <ContentUL>
              <li>
                <StyledLink href="/">All products</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Shirt</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Dress</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Pants</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Accessories</StyledLink>
              </li>
            </ContentUL>
          </Col>
          <Col lg={2}>
            <H3>Company</H3>
            <ContentUL>
              <li>
                <StyledLink href="/">Our Story</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Blog</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Press</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Contact Us</StyledLink>
              </li>
            </ContentUL>
          </Col>
          <Col lg={2}>
            <H3>Help</H3>
            <ContentUL>
              <li>
                <StyledLink href="/">Contact Us</StyledLink>
              </li>
              <li>
                <StyledLink href="/">FAQ</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Term & Conditions</StyledLink>
              </li>
            </ContentUL>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
