import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Provider } from "react-redux";
import store from "../store";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Landing from "./layouts/Landing";
import NoMatch from "./layouts/NoMatch";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";

// Define Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raph Lanok Future';
    font-style: normal;
    font-weight: normal;
    src:
      local('Raph Lanok Future'),
      url('../fonts/RaphLanokFuture.otf') format('otf');
  }

  body {
    font-family: 'Muli';
    font-size: 0.9rem;
    color: ${props => props.theme.colorBlack};
  }

  h3 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  h4 {
    font-weight: 500;
    font-size: 1.1rem;
  }

  h5 {
    font-weight: 500;
    font-size: 1rem;
  }

  h6 {
    font-weight: 800;
    font-size: 0.9rem;
  }
  
  p {
    font-weight: 300;
    font-size: .9rem;
    letter-spacing: normal;
    line-height: .5;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Header />
          <Fragment>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/products/:slug" component={ProductDetail} />
              <Route component={NoMatch} />
            </Switch>
          </Fragment>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
