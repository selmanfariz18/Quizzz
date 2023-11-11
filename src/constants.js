export const jsQuizz = {
  questions: [
    {
      question: "What is the purpose of React hooks?",
      choices: [
        "Managing component state and lifecycle methods",
        "Handling user input and events",
        "Handling asynchronous operations",
        "Managing component state and performing side effects",
      ],
      type: "MCQs",
      correctAnswer: "Managing component state and performing side effects",
    },

    {
      question: "What does JSX stand for?",
      choices: [
        "JavaScript XML",
        "JS Extension",
        "JavaScript Syntax",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript XML",
    },

    {
      question: "How can you update the state in a functional component?",
      choices: [
        "this.setState()",
        "useState()",
        "updateState()",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "useState()",
    },

    {
      question: "Which React method is called before a component is unmounted?",
      choices: [
        "componentWillUnmount",
        "componentDidUnmount",
        "unmountComponent",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "componentWillUnmount",
    },

    {
      question: "What is the purpose of the React `Fragment`?",
      choices: [
        "To create fragments of code",
        "To group multiple elements without adding extra nodes to the DOM",
        "To define component styles",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer:
        "To group multiple elements without adding extra nodes to the DOM",
    },

    {
      question: "What is the role of the `map` function in React?",
      choices: [
        "To iterate over an array and return a new array",
        "To create a map component",
        "To define component structure",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To iterate over an array and return a new array",
    },

    {
      question:
        "How can you prevent the default behavior of an event in React?",
      choices: [
        "event.preventDefault()",
        "preventDefaultEvent()",
        "stopDefault()",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "event.preventDefault()",
    },

    {
      question:
        "What is the purpose of the `key` prop in a list of React elements?",
      choices: [
        "To style list elements",
        "To uniquely identify elements in the list",
        "To define component state",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To uniquely identify elements in the list",
    },

    {
      question:
        "Which React hook is used for performing side effects in a functional component?",
      choices: [
        "useEffect()",
        "useSideEffect()",
        "performEffect()",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "useEffect()",
    },

    {
      question:
        "What is the purpose of the `dangerouslySetInnerHTML` prop in React?",
      choices: [
        "To handle dangerous HTML input",
        "To set the inner HTML of a React component",
        "To define inline styles",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To set the inner HTML of a React component",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
}