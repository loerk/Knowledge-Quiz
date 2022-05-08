import { useState } from "react";
import FlashcardList from "./flashcards/FlashcardList";


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards={flashcards} />
  );
}


const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 2,
    question: "What is 4 + 2?",
    answer: "6",
    options: [
      "2",
      "6",
      "4",
      "5"
    ]
  },
  {
    id: 3,
    question: "What is 6 + 2?",
    answer: "8",
    options: [
      "8",
      "3",
      "4",
      "5"
    ]
  }
]
export default App;
