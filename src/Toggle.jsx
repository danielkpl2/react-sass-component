import React, { Component } from 'react';

class Toggle extends Component {
  render(){
    const {handleToggle, index, answer, numCorrect, classes} = this.props;
    const class1 = answer['selected'] === "answer1" ? "toggle-switch-left" : "toggle-switch-right";
    const class2 = "shadow-" + classes[numCorrect];
    return(
      <div key={index} className="toggle-box">
        <div onClick={() => handleToggle(index, 1)} className={answer['selected'] === "answer1" ? "answer-selected" : "answer-unselected"}><p key={index}>{answer['answer1']}</p></div>
        <div onClick={() => handleToggle(index, 2)} className={answer['selected'] === "answer1" ? "answer-unselected" : "answer-selected"}><p key={index}>{answer['answer2']}</p></div>
        <div className={class1 + " " + class2}></div>
      </div>
    );
  }
}
export default Toggle;
