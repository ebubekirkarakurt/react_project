import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Navi extends Component {
  state = {
    categories: []
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({categories:data}))
      .catch(err=> console.log(err));
      
  };

  componentDidMount = () => {
      this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>Navi component</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4> Choosen : {this.props.currentcategory}</h4> */}
      </div>
    );
  }
}
