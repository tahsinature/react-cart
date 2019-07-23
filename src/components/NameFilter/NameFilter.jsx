import React, { Component } from "react";

import classes from "./NameFilter.module.scss";
import CommonButton from "../UI/Buttons/CommonButton/CommonButton";

class NameFilter extends Component {
  state = {
    text: undefined
  };
  shouldComponentUpdate = (nextProps, nextState) =>
    !(JSON.stringify(this.state) === JSON.stringify(nextState));
  render() {
    return (
      <div className={classes.NameFilter}>
        <input
          type="text"
          placeholder="Search by title"
          className={classes.Input}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <CommonButton
          className={classes.CommonButton}
          clicked={() => this.props.filterByTitle(this.state.text)}
          disabled={this.state.text}
          btn-na-con
        >
          Filter
        </CommonButton>
      </div>
    );
  }
}

export default NameFilter;
