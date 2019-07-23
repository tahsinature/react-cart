import React from "react";

import classes from "./Cart.module.scss";
import Item from "./Item/Item";

const cart = props => {
  return (
    <div className={classes.Cart}>
      <div className={classes.CartTop}>
        <i className="fas fa-cart-plus fa-3x" />
        <p>Cart</p>
      </div>
      <hr />
      <div className={classes.Items}>
        {props.cartItems.map(item => (
          <Item
            remove={() => props.remove(item)}
            className={classes.Item}
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default cart;
