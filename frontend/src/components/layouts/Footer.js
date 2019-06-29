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
  background-color: ${props => props.theme.colorBlueDark};
  color: ${props => props.theme.colorGrey};
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
    color: ${props => props.theme.colorGrey};
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
  }
  &:hover,
  &:active {
    color: ${props => props.theme.colorWhite};
  }
`;

const ContentUL = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
`;

const H3 = styled.h3`
  color: ${props => props.theme.colorWhite};
`;

const P = styled.p`
  font-family: "Mitr";
  letter-spacing: 0.8px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <h2>Phatt</h2>
            <P>Copyright &copy; 2019 by Phatt Fashion. All rights reserved.</P>
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
            <H3>อสังหาริมทรัพย์</H3>
            <ContentUL>
              <li>
                <StyledLink href="/">ทรัพย์ทั้งหมด</StyledLink>
              </li>
              <li>
                <StyledLink href="/">ทองหล่อ</StyledLink>
              </li>
              <li>
                <StyledLink href="/">เอกมัย</StyledLink>
              </li>
              <li>
                <StyledLink href="/">พร้อมพงษ์</StyledLink>
              </li>
              <li>
                <StyledLink href="/">ราชเทวี</StyledLink>
              </li>
              <li>
                <StyledLink href="/">ห้วยขวาง</StyledLink>
              </li>
              <li>
                <StyledLink href="/">อื่นๆ</StyledLink>
              </li>
            </ContentUL>
          </Col>
          <Col lg={2}>
            <H3>บริษัท</H3>
            <ContentUL>
              <li>
                <StyledLink href="/">เกี่ยวกับเรา</StyledLink>
              </li>
              <li>
                <StyledLink href="/">บทความ</StyledLink>
              </li>
              <li>
                <StyledLink href="/">Press</StyledLink>
              </li>
              <li>
                <StyledLink href="/">ติดต่อเรา</StyledLink>
              </li>
            </ContentUL>
          </Col>
          <Col lg={2}>
            <H3>ช่วยเหลือ</H3>
            <ContentUL>
              <li>
                <StyledLink href="/">ติดต่อเรา</StyledLink>
              </li>
              <li>
                <StyledLink href="/">FAQ</StyledLink>
              </li>
              <li>
                <StyledLink href="/">ข้อตกลง</StyledLink>
              </li>
            </ContentUL>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
