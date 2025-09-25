import React from "react";

export default function Leaderboard({ onBack }) {
  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      <ul>
        <li>Alice - 10 pts</li>
        <li>Bob - 8 pts</li>
        <li>Charlie - 6 pts</li>
      </ul>
      <button onClick={onBack}>⬅ Back</button>
    </div>
  );
}
