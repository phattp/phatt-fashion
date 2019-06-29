import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import heroImage from "../../images/hero.jpg";

const HeroBg = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: ${props => props.theme.colorPrimary};
`;

const StyledForm = styled(Form)`
  background-color: ${props => props.theme.colorWhite};
  padding: 2rem;
  border-radius: 5px;
`;

const ButtonPrimary = styled(Button)`
  background-color: ${props => props.theme.colorPrimary};
  &:hover {
    background-color: ${props => props.theme.colorBlueDark};
  }
`;

const Hero = () => {
  return (
    <HeroBg>
      <Container>
        <StyledRow>
          <Col xs={12} sm={12} md={8} className="text-center">
            <Link to="/products">Shop Now</Link>
          </Col>
        </StyledRow>
      </Container>
    </HeroBg>
  );
};

export default Hero;
