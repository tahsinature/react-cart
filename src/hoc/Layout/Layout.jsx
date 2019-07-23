import React, { Fragment, Component } from "react";
import _ from "lodash";

import dbStatic from "../../dbStatic";
import Filter from "../../containers/Filter/Filter";
import CartHolder from "../../containers/CartHolder/CartHolder";
import Products from "../../components/Products/Products";
import classes from "./Layout.module.scss";

class Layout extends Component {
  state = {
    allProducts: dbStatic.allProducts,
    cartItems: []
  };
  filter = (sizes, text) => {
    let allProducts;

    // filteredBySize
    allProducts =
      sizes.length < 1
        ? dbStatic.allProducts
        : dbStatic.allProducts.filter(
            prod => _.intersection(prod.sizes, sizes).length > 0
          );

    // filteredByText
    allProducts = allProducts.filter(prod => prod.title.includes(text));

    this.setState({ allProducts });
  };

  removeCartItemHandler = item => {
    const cartItems = [...this.state.cartItems];
    const index = this.state.cartItems.indexOf(item);
    cartItems.splice(index, 1);
    this.setState({ cartItems });
  };

  addToCartHandler = product => {
    const cartItems = [...this.state.cartItems];
    let hasExist = cartItems.find(item => item.id === product.id);
    product.qty = !hasExist ? 1 : hasExist.qty + 1;
    if (hasExist) hasExist = product;
    else cartItems.push(product);

    this.setState({ cartItems });
  };

  render() {
    return (
      <Fragment>
        <main className={classes.Main}>
          <div className={classes.FilterAndProducts}>
            <Filter filter={this.filter} />
            <Products
              allProducts={this.state.allProducts}
              addToCart={this.addToCartHandler}
            />
          </div>
          <CartHolder
            remove={this.removeCartItemHandler}
            cartItems={this.state.cartItems}
          />
        </main>
      </Fragment>
    );
  }
}

export default Layout;
