import React, { Component } from 'react';
import Toggle from './Toggle';
import './App.css';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: [...props.answers],
      correct: false,
      numCorrect: 0
    }
    const numRedClasses = this.props.answers.length - 2;
    this.classes = [];
    for(var i = 0; i < numRedClasses; i++){
      this.classes.push("red");
    }
    this.classes = this.classes.concat([ 'amber', 'yellow', 'green']);
    this.handleToggle = this.handleToggle.bind(this);
    this.numCorrect = this.numCorrect.bind(this);

  }
  
  componentDidMount(){
    this.numCorrect();
  }

  numCorrect(){
    var count = 0;
    for(var i = 0; i < this.state.answers.length; i++){
      if(this.state.answers[i]["correct"] === this.state.answers[i]["selected"]) {
        count++;
      }
    }
    this.setState({
      numCorrect: count,
      correct: count === this.state.answers.length
    });
  }

  handleToggle(index, answer){
    const answers = [...this.state.answers];

    if(answer === 1){
      answers[index]["selected"] = "answer1";
    } else if (answer === 2) {
      answers[index]["selected"] = "answer2";
    }
    this.setState({
      answers: answers,
    }, () => this.numCorrect());

  }

  render() {
    return (
      <div className="App">
        <div className={"background-" + this.classes[this.state.numCorrect]}>
          <p className="question">{this.props.question}</p>
          <div style={{"display": "inline-grid"}}>
            {this.state.answers.map((answer, index) =>
              <Toggle
                key={index}
                index={index}
                handleToggle={this.handleToggle}
                answer={answer}
                numCorrect={this.state.numCorrect}
                classes={this.classes} />
            )}
            </div>
          <p className="correct">{this.state.correct ? "The answer is correct." : "The answer is incorrect."}</p>
        </div>
      </div>
    );
  }
}

export default Quiz;
