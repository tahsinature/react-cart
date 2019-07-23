import React, { Fragment } from "react";

import classes from "./SizeBubble.module.scss";

const sizeBubble = props => {
  let isActive = props.activeSizes
    ? props.activeSizes.includes(props.size)
    : false;
  const attachedClasses = [classes.Size, isActive ? classes.Active : null];
  const filter = () => {
    isActive = !props.isActive;
    if (props.clicked) props.clicked();
  };
  return (
    <Fragment>
      <span
        onClick={filter}
        className={attachedClasses.join(" ")}
        style={{ padding: props.bubblePadding }}
      >
        {props.size}
      </span>
    </Fragment>
  );
};

export default sizeBubble;
