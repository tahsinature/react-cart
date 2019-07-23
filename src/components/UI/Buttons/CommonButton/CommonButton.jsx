import React from "react";

import classes from "./CommonButton.module.scss";

const commonButton = props => {
  const assignedClasses = [classes.CommonButton];
  if (props.className) assignedClasses.push(props.className);

  const handleClick = () => {
    if (props.clicked) props.clicked();
  };
  return (
    <button
      onClick={handleClick}
      className={assignedClasses.join(" ")}
      disabled={!props.disabled && props["btn-na-con"]}
    >
      {props.children}
    </button>
  );
};

export default commonButton;
