# React Quiz App

A modern, interactive quiz application built with React that tests your knowledge of React.js fundamentals. Features a clean interface with timed questions, answer shuffling, and detailed results analysis.

## Features

- Interactive Quiz Experience: 10 carefully crafted React.js questions
- Timed Questions: 15-second timer for each question with auto-skip functionality
- Answer Shuffling: Randomized answer order to prevent memorization
- Visual Feedback: Color-coded answers (green for correct, red for incorrect)
- Automatic Skip: Unanswered questions skipped after timer expires
- Results Summary: Detailed breakdown of correct, incorrect, and skipped answers
- Responsive Design: Works seamlessly on desktop and mobile devices

## Built With

- React 18 - Frontend framework
- Modern React Hooks - useState, useEffect, useRef, useCallback
- CSS3 - Styling and animations
- Vite - Build tool and development server

## Prerequisites

- Before running this application, make sure you have:
- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

### Clone the repository

```bash
git clone https://github.com/asifjirayat/quiz-app
cd quiz-app
```

### Install dependencies

```bash
npm install
or
yarn install
```

### Start the development server

```bash
npm run dev
or
yarn dev
```

### Open your browser

Navigate to `http://localhost:5173` to view the application

## Project Structure

```bash
├── src/
│   ├── App.jsx
│   ├── assets/
│   │   ├── quiz-complete.png
│   │   └── quiz-logo.png
│   ├── components/
│   │   ├── Answers.jsx
│   │   ├── Header.jsx
│   │   ├── Question.jsx
│   │   ├── QuestionTimer.jsx
│   │   ├── Quiz.jsx
│   │   └── Summary.jsx
│   ├── index.css
│   ├── main.jsx
│   └── questions.js
```

## How to Use

- Wait for the first question to appear
- Click on your chosen answer within the 15-second time limit
- Questions will automatically skip if time runs out
- View Results: After completing all questions, view your detailed performance summary
- Retake Quiz: Refresh the page to start over

## Customization

### Adding New Questions

#### Edit the `questions.js` file to add new questions:

```bash
{
id: "q11",
text: "Your question here?",
answers: [
"Correct answer (always first)",
"Incorrect option 1",
"Incorrect option 2",
"Incorrect option 3"
]
}
```

### Modifying Timer

Change the timeout duration in Question.jsx:

```bash
// Change timer duration here
 let timer = 15000;
```

### Styling

#### Modify the CSS files to customize the appearance:

- index.css - Global styles

## Architecture

#### The app follows React best practices:

- Component Composition: Modular components for reusability
- State Management: Local state with hooks, avoiding unnecessary global state
- Performance Optimization: useCallback for preventing unnecessary re-renders
- Separation of Concerns: Data, logic, and presentation are clearly separated

## Available Scripts

```bash
npm run dev - Start development server
```

```bash
npm run build - Build for production
```

```bash
npm run preview - Preview production build locally
```

```bash
npm run lint - Run ESLint for code quality
```

## Contributing

- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- React team for the amazing framework
- Quiz questions inspired by React documentation

## Known Issues

- Timer may occasionally lag on slower devices
- Answer shuffling is consistent within a session (refresh to re-shuffle)

## Support

If you encounter any issues or have questions:

- Open an issue on GitHub

#### Happy Learning!

Test your React knowledge and improve your skills with this interactive quiz application.
