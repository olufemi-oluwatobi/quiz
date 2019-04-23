import React, { Component } from "react";
import { Context } from "./context";

class Options extends Component {
  renderCheckBox(context) {
    const { options, currentIndex: index } = context.state;

    return (
      <div style={{ marginTop: "5px" }}>
        {Object.keys(options[index]).map(key => (
          <div>
            <input
              type="radio"
              value={options[index][key]}
              name={index}
              onClick={context.handleRadioButtonClick}
            />
            <label style={{ marginLeft: "5px" }} for={options[index][key]}>
              {options[index][key]}
            </label>
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <Context.Consumer>
          {context => <div>{this.renderCheckBox(context)}</div>}
        </Context.Consumer>
      </div>
    );
  }
}
export default Options;
