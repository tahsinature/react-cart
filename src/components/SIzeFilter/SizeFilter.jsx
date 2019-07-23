import React from "react";

import classes from "./SizeFilter.module.scss";
import SizeBubble from "../UI/SizeBubble/SizeBubble";

const allSizes = ["S", "M", "L", "XL", "2XL"];

const sizesBar = props => {
  return (
    <div className={classes.SizeFilter}>
      <p>Sizes:</p>
      <div className={classes.BubbleBox}>
        {allSizes.map(size => (
          <SizeBubble
            size={size}
            key={size}
            bubblePadding={20}
            activeSizes={props.activeSizes}
            clicked={() => props.filterBySize(size)}
          />
        ))}
      </div>
    </div>
  );
};

export default sizesBar;
