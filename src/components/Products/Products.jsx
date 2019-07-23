import React from "react";

import Product from "./Product/Product";
import classes from "./Products.module.scss";

const products = props => {
  return (
    // <Fragment>
    <div className={classes.Products}>
      {props.allProducts.map(product => {
        return (
          <Product
            key={product.id}
            addToCart={() => props.addToCart(product)}
            product={product}
          />
        );
      })}
    </div>
    // </Fragment>
  );
};

export default products;
