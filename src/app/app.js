import React, { useState } from 'react';
import Header from './components/header';
import Score from './components/score';
import Instructions from './components/intructions';
import GameArea from './components/gameArea';
import Footer from './components/footer';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);

  return (
    <div>
      <Header />
      <Score score={score} bestScore={bestScore} />
      <Instructions />
      <GameArea
        increaseScore={increaseScore}
        resetScore={resetScore}
        setBestScore={setBestScore}
      />
      <Footer />
    </div>
  );
};

export default App;
