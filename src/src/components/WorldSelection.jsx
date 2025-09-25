import React from "react";

export default function WorldSelection({ onSelectWorld, onViewLeaderboard }) {
  return (
    <div>
      <h1>🌍 Choose Your World</h1>
      <button onClick={() => onSelectWorld("Algebra")}>Algebra World</button>
      <button onClick={() => onSelectWorld("Geometry")}>Geometry World</button>
      <button onClick={() => onSelectWorld("Space")}>Space World</button>
      <br />
      <button onClick={onViewLeaderboard}>🏆 View Leaderboard</button>
    </div>
  );
}
