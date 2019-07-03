import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import heroImage from "../../images/hero-3.jpg";

const HeroBg = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: 50% 30%;
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: ${props => props.theme.colorPrimary};
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.8px;
  padding: 12px 25px;
  border-radius: 60px;
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

const H1 = styled.h1`
  color: ${props => props.theme.colorWhite};
  letter-spacing: 0.8px;
  margin-bottom: 40px;
  font-size: 2.6rem;
  font-weight: 900;
`;

const Hero = () => {
  return (
    <HeroBg>
      <Container>
        <StyledRow>
          <Col xs={12} sm={12} className="text-center">
            <H1>CHOOSE YOUR STYLE IN YOUR WAY</H1>
            <StyledLink to="/products">SHOP NOW</StyledLink>
          </Col>
        </StyledRow>
      </Container>
    </HeroBg>
  );
};

export default Hero;
