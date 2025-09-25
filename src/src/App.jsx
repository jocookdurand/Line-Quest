import React, { useState } from "react";
import WorldSelection from "./components/WorldSelection.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import GameScreen from "./components/GameScreen.jsx";

export default function App() {
  const [screen, setScreen] = useState("menu");
  const [world, setWorld] = useState(null);

  return (
    <div>
      {screen === "menu" && (
        <WorldSelection
          onSelectWorld={(w) => {
            setWorld(w);
            setScreen("game");
          }}
          onViewLeaderboard={() => setScreen("leaderboard")}
        />
      )}
      {screen === "game" && (
        <GameScreen world={world} onBack={() => setScreen("menu")} />
      )}
      {screen === "leaderboard" && (
        <Leaderboard onBack={() => setScreen("menu")} />
      )}
    </div>
  );
}
