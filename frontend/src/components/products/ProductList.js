import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  Container,
  Spinner,
  Col,
  Row,
  Card
} from "react-bootstrap";
import { fetchProducts } from "../../actions/products";
import styled from "styled-components";

const BreadcrumbLink = styled(Link)`
  margin-right: 5px;
`;

const FormCard = styled.div`
  border-right: 1px solid ${props => props.theme.colorGreyLight}
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colorBlack};
  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorBlack};
  }
  :hover,
  :active {
    color: ${props => props.theme.colorPrimary};
  }
  font-size: 0.9rem;
`;

const StyledCard = styled(Card)`
  height: 100%;
  border: 0px;
  border-radius: 0px;
  padding-bottom: 40px;

  :hover,
  :active {
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  }
`;

const CardText = styled(Card.Text)`
  color: ${props => props.theme.colorPrimary};
  font-size: 1rem;
  margin-top: 5px;
`;

const CardImg = styled(Card.Img)`
  height: 250px;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 0px;
  margin-bottom: 10px;
`;

const UL = styled.ul`
  list-style: none;
  font-size: 0.8rem;
  font-weight: 600;
`;

class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    fetchProducts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchProducts();
    window.scrollTo(0, 0);
  }

  renderBreadcrumb() {
    return (
      <Breadcrumb className="mt-3">
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <Breadcrumb.Item active>/ Products</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  renderSearchForm() {
    return (
      <FormCard>
        <h6>Categories</h6>
        <UL>
          <li>Dress</li>
          <li>Shirt</li>
          <li>Pants</li>
          <li>Accessories</li>
        </UL>
      </FormCard>
    );
  }

  renderProductList() {
    if (!this.props.products) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return this.props.products.map(product => {
      return (
        <Col xs={6} sm={6} lg={4} xl={3} className="mb-4" key={product._id}>
          <StyledCard>
            <Link to={`/products/${product.slug}`}>
              <CardImg
                variant="top"
                src={`${process.env.REACT_APP_DEV_API_URL}/${
                  product.images[0]
                }`}
              />
            </Link>
            <Card.Body className="p-0 pl-2">
              <StyledLink to={`/products/${product.slug}`}>
                {product.name}
              </StyledLink>
              <CardText>฿{product.sellingPrice}.00</CardText>
            </Card.Body>
          </StyledCard>
        </Col>
      );
    });
  }

  render() {
    return (
      <Container
        style={{ backgroundColor: "#f5f5f5", paddingBottom: "3rem" }}
        fluid
      >
        {this.renderBreadcrumb()}
        <Row>
          <Col xs={12} md={4} lg={2}>
            {this.renderSearchForm()}
          </Col>
          <Col xs={12} md={8} lg={10}>
            <Row>{this.renderProductList()}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
