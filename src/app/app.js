import React, { useState } from 'react';
import Header from './components/header';
import Score from './components/score';
import Instructions from './components/intructions';
import GameArea from './components/gameArea';
import Flair from './components/flair';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);

  const newBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  return (
    <div id="app">
      <Header />
      <Flair />
      <div id="main-content">
        <Instructions />
        <Score score={score} bestScore={bestScore} />
        <GameArea
          increaseScore={increaseScore}
          resetScore={resetScore}
          newBestScore={newBestScore}
        />
      </div>
    </div>
  );
};

export default App;
