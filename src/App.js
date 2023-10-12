import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = { currentCategroy: "", products: [] };

  changeCategory = (category) => {
    this.setState({ currentCategroy: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((reponse) => reponse.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    let cetegoryInfo = { title: "ProductList" };

    return (
      <div>
        <Container>
          <h1> My First React App </h1>
          <Row>
            <Col xs="4">
              <Row>
                <Navi
                  currentcategory={this.state.currentCategroy}
                  changeCategory={this.changeCategory}
                />
              </Row>
            </Col>
            <Col xs="8">
              <ProductList
                products={this.state.products}
                currentcategory={this.state.currentCategroy}
                info={cetegoryInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
