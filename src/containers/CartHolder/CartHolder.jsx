import React, { Component } from "react";

import classes from "./CartHolder.module.css";
import Cart from "../../components/Cart/Cart";
import CommonButton from "../../components/UI/Buttons/CommonButton/CommonButton";

class CartHolder extends Component {
  state = {
    isCartShowing: false
  };

  showCartHandler = () => {
    this.setState((state, props) => {
      return {
        isCartShowing: !state.isCartShowing
      };
    });
  };

  render() {
    const assignedClasses = [classes.CartHolder];
    assignedClasses.push(
      this.state.isCartShowing ? classes.ShowCart : classes.HideCart
    );
    return (
      <div className={assignedClasses.join(" ")}>
        <CommonButton
          className={classes.CartToggle}
          clicked={this.showCartHandler}
        >
          <i
            className={
              this.state.isCartShowing
                ? "far fa-window-close fa-2x"
                : "fas fa-cart-plus fa-2x"
            }
          />
        </CommonButton>
        <Cart remove={this.props.remove} cartItems={this.props.cartItems} />
      </div>
    );
  }
}

export default CartHolder;
