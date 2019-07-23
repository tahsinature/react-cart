import React from "react";

import classes from "./Product.module.scss";
import CommonButton from "../../UI/Buttons/CommonButton/CommonButton";
import SizeBubble from "../../UI/SizeBubble/SizeBubble";

const product = props => {
  return (
    // <Fragment>
    <div className={classes.Product}>
      <img src={props.product.imageUrl} alt="product" />
      <p>{props.product.title}</p>
      <p>{props.product.price}</p>
      <div className={classes.SizesBar}>
        Size Available:{" "}
        <div className={classes.Sizes}>
          {props.product.sizes.map(size => (
            <SizeBubble bubblePadding={14} size={size} key={size} />
          ))}
        </div>
      </div>
      <CommonButton className={classes.CommonButton} clicked={props.addToCart}>
        Add to Cart
      </CommonButton>
    </div>
    // </Fragment>
  );
};

export default product;
