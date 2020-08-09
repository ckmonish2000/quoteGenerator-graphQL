import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.quote}</h1>
      </div>
    );
  }
}
