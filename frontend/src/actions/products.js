import axios from "axios";
import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./types";

// Fetch Products
export const fetchProducts = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DEV_API_URL}/products/`)
    .then(res => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Fetch Product
export const fetchProduct = slug => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DEV_API_URL}/products/${slug}/`)
    .then(res => {
      dispatch({
        type: FETCH_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
