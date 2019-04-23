import React, { Component } from "react";
import update from "immutability-helper";
import Questions from "./questions";
import { Context } from "./context";
import "./style.css";

const correctAnswers = ["abuja", "4"];
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["what is the capital of nigeria", "what is 2+2"],
      options: [
        { a: "abuja", b: "lagos", c: "ikeja", d: "lokoja" },
        { a: "4", b: "5", c: "6", d: "7" }
      ],
      answers: [],
      display: [],
      currentIndex: 0,
      finalScore: null
    };
  }
  componentDidMount() {
    console.log(this.state.display);
    const index = 0;
    this.handleDisplay(index);
  }
  handleSubmit() {
    const { answers } = this.state;
    let count = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      for (let j = 0; j < answers.length; j++) {
        if (correctAnswers[i] === answers[j]) {
          count++;
        }
      }
    }
    const text =
      count / correctAnswers.length < 0.5
        ? "you failed"
        : count / correctAnswers.length < 0.2
        ? "you failed"
        : "you tried";
    alert(`your score is ${count}/${correctAnswers.length},${text}`);
  }
  handleClick = e => {
    const { value, name } = e.target;
    this.setState(
      update(this.state, {
        answers: {
          $merge: { [name]: value }
        }
      })
    );
  };
  handleDisplay(index) {
    const { questions } = this.state;
    const question = [questions[index]];
    this.setState({
      currentIndex: index,
      display: question
    });
  }
  render() {
    const { currentIndex, questions } = this.state;
    const isLastQuestion = currentIndex === questions.length - 1;
    return (
      <div className="main_wrapper">
        <Context.Provider
          value={{
            state: this.state,
            handleRadioButtonClick: e => this.handleClick(e)
          }}
        >
          <Questions />
        </Context.Provider>

        <button
          type="submit"
          text="submit"
          onClick={() =>
            isLastQuestion
              ? this.handleSubmit()
              : this.handleDisplay(this.state.currentIndex + 1)
          }
          className="submit_button"
        >
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>
    );
  }
}
export default Quiz;
