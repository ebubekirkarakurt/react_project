import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {

  render() {
    return (
      <div>
        <p>Naber - </p>
        <div>
        {this.props.addCart.foreach(element => (
            <p>{element.product.productName}</p>
              ))}
        </div>
        <Table>
          <thead>++
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity PerUnit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>

            {/* {this.props.cart.map((cartItem) => (
              
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.product.quantity}</td>
              </tr>
              
            ))} */}
          </tbody>
           
        </Table>
        
      </div>
    );
  }
}
