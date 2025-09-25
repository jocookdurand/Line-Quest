import React, { useState } from "react";

export default function GameScreen({ world, onBack }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const question = {
    text: "Find the slope of the line through (1,2) and (3,6).",
    correct: "2",
  };

  const checkAnswer = () => {
    if (answer.trim() === question.correct) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again!");
    }
  };

  return (
    <div>
      <h2>{world} World</h2>
      <p>{question.text}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
      <p>{feedback}</p>
      <button onClick={onBack}>⬅ Back</button>
    </div>
  );
}
