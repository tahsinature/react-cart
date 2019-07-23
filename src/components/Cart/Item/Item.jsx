import React, { Component } from "react";

import classes from "./Item.module.scss";

class Item extends Component {
  state = {
    closeBtnHovered: false
  };
  closeBtnMouseInHandler = () => {
    this.setState({ closeBtnHovered: true });
  };
  closeBtnMouseOutHandler = () => {
    this.setState({ closeBtnHovered: false });
  };
  render() {
    return (
      <div
        className={[
          classes.Item,
          this.state.closeBtnHovered ? classes.WillBeRemoved : null,
          this.props.className
        ].join(" ")}
      >
        <img
          src={this.props.item.imageUrl}
          className={classes.Image}
          alt="cart-item"
        />
        <div className={classes.TextBox}>
          <p className={classes.Price}>{this.props.item.title}</p>
          <p>Size: {this.props.item.size}</p>
          <p>Quantity: {this.props.item.qty}</p>
        </div>
        <div className={classes.PriceBox}>
          <p>$ {this.props.item.price}</p>
        </div>
        <div
          className={classes.CloseButton}
          onClick={this.props.remove}
          onMouseEnter={this.closeBtnMouseInHandler}
          onMouseLeave={this.closeBtnMouseOutHandler}
        >
          <i className="fas fa-times" />
        </div>
      </div>
    );
  }
}

export default Item;
