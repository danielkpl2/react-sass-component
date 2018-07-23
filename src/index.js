import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './Quiz';
import registerServiceWorker from './registerServiceWorker';

const answers = [
  {
    "answer1": "Cell wall",
    "answer2": "Ribosomes",
    "correct": "answer2",
    "selected": "answer2"
  },
  {
    "answer1": "Cytoplasm",
    "answer2": "Chloroplast",
    "correct": "answer1",
    "selected": "answer2"
  },
  {
    "answer1": "Partially permeable membrane",
    "answer2": "Impermeable membrane",
    "correct": "answer1",
    "selected": "answer2"
  },
  {
    "answer1": "Cellulose",
    "answer2": "Mitochondria",
    "correct": "answer2",
    "selected": "answer1"
  }

]

const question = "An animal cell contains:"

ReactDOM.render(<Quiz question={question} answers={answers} />, document.getElementById('root'));
registerServiceWorker();
