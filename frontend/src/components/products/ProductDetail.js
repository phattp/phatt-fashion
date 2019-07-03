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
  Image
} from "react-bootstrap";
import { fetchProduct } from "../../actions/products";
import styled from "styled-components";

const BreadcrumbLink = styled(Link)`
  margin-right: 5px;
`;

class ProductDetail extends Component {
  static propTypes = {
    product: PropTypes.object,
    fetchProduct: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchProduct(slug);
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

  renderProduct() {
    const { product } = this.props;

    if (!product) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return (
      <Row>
        <Col xs={12} md={6}>
          <Image
            src={`${process.env.REACT_APP_DEV_API_URL}/${product.images[0]}`}
            height="500px"
          />
        </Col>
        <Col xs={12} md={6}>
          <h2>{product.name}</h2>
          <h3>{product.sellingPrice}</h3>
          <p>{product.description}</p>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f5f5f5", paddingBottom: "4rem" }}>
        <Container fluid>
          {this.renderBreadcrumb()}
          <Container
            style={{
              backgroundColor: "#fff",
              paddingTop: "2rem",
              paddingBottom: "2rem"
            }}
          >
            {this.renderProduct()}
          </Container>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { fetchProduct }
)(ProductDetail);
