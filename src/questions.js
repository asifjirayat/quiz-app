export default [
  {
    id: "q1",
    text: "What is the primary purpose of the useEffect hook in React?",
    answers: [
      "To perform side effects in functional components like data fetching and subscriptions.",
      "To manage component state in functional components.",
      "To create reusable custom hooks for business logic.",
      "To optimize component rendering performance.",
    ],
  },
  {
    id: "q2",
    text: "Which method is used to update state in a class component?",
    answers: [
      "this.setState()",
      "this.updateState()",
      "this.changeState()",
      "this.modifyState()",
    ],
  },
  {
    id: "q3",
    text: "What is the correct way to pass data from a parent component to a child component?",
    answers: ["Using props", "Using state", "Using context", "Using refs"],
  },
  {
    id: "q4",
    text: "Which hook would you use to store a mutable value that persists across re-renders?",
    answers: ["useRef", "useState", "useEffect", "useMemo"],
  },
  {
    id: "q5",
    text: "What is the purpose of the key prop when rendering lists in React?",
    answers: [
      "To help React identify which items have changed, been added, or removed for efficient re-rendering.",
      "To provide unique styling for each list item.",
      "To enable click events on list items.",
      "To sort the list items in a specific order.",
    ],
  },
  {
    id: "q6",
    text: "Which lifecycle method is called after a component is mounted to the DOM?",
    answers: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
  },
  {
    id: "q7",
    text: "What does the useMemo hook do?",
    answers: [
      "Memoizes expensive calculations to avoid unnecessary re-computations.",
      "Manages component state with memory optimization.",
      "Creates a reference to a DOM element.",
      "Handles side effects in functional components.",
    ],
  },
  {
    id: "q8",
    text: "How do you handle events in React?",
    answers: [
      "By passing event handler functions as props to JSX elements.",
      "By using addEventListener in the component constructor.",
      "By defining event handlers in a separate events.js file.",
      "By using inline HTML event attributes like onclick.",
    ],
  },
  {
    id: "q9",
    text: "What is the difference between controlled and uncontrolled components?",
    answers: [
      "Controlled components have their state managed by React, while uncontrolled components manage their own state.",
      "Controlled components are class components, while uncontrolled components are functional components.",
      "Controlled components use hooks, while uncontrolled components use lifecycle methods.",
      "Controlled components are faster, while uncontrolled components are easier to debug.",
    ],
  },
  {
    id: "q10",
    text: "What is React Fragment used for?",
    answers: [
      "To group multiple elements without adding an extra DOM node.",
      "To create reusable component templates.",
      "To handle component errors gracefully.",
      "To optimize component rendering performance.",
    ],
  },
];
