import React, { Component } from "react";
import Options from "./options";
import { Context } from "./context";

class Questions extends Component {
  renderQuestion(context) {
    const { display: question } = context.state;
    return (
      <div className="questions_containers">
        <span className="question_wrapper">{question[0]}</span>
        <Options />
      </div>
    );
  }
  render() {
    return (
      <Context.Consumer>
        {context => <div>{this.renderQuestion(context)}</div>}
      </Context.Consumer>
    );
  }
}
export default Questions;
