import React, { useEffect, useState } from "react";
import FlashCard from "./Flashcard";
import "../../css/flipcard.css";
const FlashcardList = ({ flashcard }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const handleChoice = (elem) => {
    choiceOne ? setChoiceTwo(elem) : setChoiceOne(elem);
  };

  useEffect(() => {
    console.log("one", choiceOne, "two", choiceTwo);
  }, [choiceOne, choiceTwo]);

  return (
    <div className="card-grid">
      {flashcard.map((flashcard, idx) => {
        return (
          <FlashCard
            handleChoice={handleChoice}
            flashcard={flashcard}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default FlashcardList;