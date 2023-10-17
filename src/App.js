import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import NavigationBar from "./NavigationBar";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class App extends Component {
  state = { currentcategroy: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategroy: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount = () => {
    this.getProducts();
  };

  addToCart = (product) => {
    const newCart = this.state.cart;
    const addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 2);

    console.log("newCart: " + newCart);
  };

  removeFromCart(product) {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  }

  render() {
    let categoryInfo = { title: "ProductList" };

    return (
      <div>
        <Container>
          <NavigationBar
            removeFromCart={this.removeFromCart.bind(this)}
            cart={this.state.cart}
          />
          <Row>
            <Col xs="3">
              <Row>
                <CategoryList
                  currentcategory={this.state.currentCategroy}
                  changeCategory={this.changeCategory}
                />
              </Row>
            </Col>
            <Col xs="9">
             <BrowserRouter>
             <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      currentcategory={this.state.currentCategroy}
                      addCart={this.addToCart}
                      info={categoryInfo}
                    />
                  )}
                />
                { <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      addCart={this.addToCart}
                    />
                  )}
                /> }

                <Route element={<NotFound />} />
              </Switch>
             
             </BrowserRouter>
              { <CartList cart={this.state.cart} /> }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/*<Route
path="/cart"
render={(props) => (*/
