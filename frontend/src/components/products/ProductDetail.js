import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {
  Breadcrumb,
  Container,
  Spinner,
  Col,
  Row,
  Image,
  Button
} from "react-bootstrap";
import { fetchProduct } from "../../actions/products";
import styled from "styled-components";

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Price = styled.h3`
  color: ${props => props.theme.colorPrimary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
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
        <Link to="/" className="mr-2">
          Home
        </Link>
        <div className="mr-2">/</div>
        <Link to="/products" className="mr-2">
          Products
        </Link>
        <div className="mr-2">/</div>
        <Breadcrumb.Item active>Product</Breadcrumb.Item>
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

    const imagesArr = product.images.map(image => ({
      original: `${process.env.REACT_APP_DEV_API_URL}/${image}`,
      thumbnail: `${process.env.REACT_APP_DEV_API_URL}/${image}`
    }));

    return (
      <Row>
        <Col xs={12} md={5}>
          <ImageGallery
            items={imagesArr}
            originalAlt={product.name}
            thumbnailAlt={product.name}
          />
        </Col>
        <Col xs={12} md={7}>
          <ProductName>{product.name}</ProductName>
          <Price>฿{product.sellingPrice}.00</Price>
          <p>{product.description}</p>
          <p>Color: {product.color}</p>
          <p>Size: {product.size}</p>
          <Button>Add to Cart</Button>
          <Button>Buy Now</Button>
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
