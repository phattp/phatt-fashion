import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import new1 from "../../images/new-6.jpg";
import new2 from "../../images/new-7.jpg";
import new3 from "../../images/new-3.jpg";

const Wrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 4rem;
`;

const H2 = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: ${props => props.theme.colorPrimary};
`;

class Recommended extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <H2>NEW ARRIVALS</H2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="text-center mb-4">
              <Image src={new1} alt="New collection 1" fluid />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center mb-4">
              <Image src={new2} alt="New collection 2" fluid />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center">
              <Image src={new3} alt="New collection 3" fluid />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Recommended;
