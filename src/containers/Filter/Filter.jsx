import React, { Component } from "react";
import _ from "lodash";

import classes from "./Filter.module.scss";
import SizeFilter from "./../../components/SIzeFilter/SizeFilter";
import NameFilter from "../../components/NameFilter/NameFilter";

class Filter extends Component {
  state = {
    filter: {
      sizes: [],
      text: undefined
    }
  };
  shouldComponentUpdate = (nextProps, nextState) =>
    !(JSON.stringify(nextState) === JSON.stringify(this.state));

  filterTrackingHandler = (size, text = "") => {
    this.setState(
      (state, props) => {
        let sizes = [...state.filter.sizes];

        const hasAlready = sizes.includes(size);
        if (hasAlready) _.pull(sizes, size);
        else if (!size) {
        } else sizes.push(size);
        return {
          filter: { sizes, text }
        };
      },
      () => {
        this.props.filter(this.state.filter.sizes, text);
      }
    );
  };

  render() {
    return (
      <div className={classes.Filter}>
        <SizeFilter
          activeSizes={this.state.filter.sizes}
          filterBySize={size =>
            this.filterTrackingHandler(size, this.state.filter.text)
          }
        />
        <NameFilter
          filterByTitle={text => this.filterTrackingHandler(undefined, text)}
        />
      </div>
    );
  }
}

export default Filter;
