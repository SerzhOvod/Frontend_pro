import React, { useState, useEffect } from 'react';
import './App.css';
import EmojiCard from './components/EmojiCard/EmojiCard';
import Button from './components/Buttons/Button';

const emojis = ['😀', '😊', '😎', '🤩', '😍'];

function App() {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('votes');
    return savedVotes ? JSON.parse(savedVotes) : [];
  });

  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = index => {
    setVotes(prevVotes => {
      const newVotes = [...prevVotes];
      newVotes[index]++;
      return newVotes;
    });
  };

  const showResults = () => {
    setShowWinner(true);
  };

  const clearResults = () => {
    localStorage.removeItem('votes');
    setVotes([0, 0, 0, 0, 0]);
    setShowWinner(false);
  };

  const maxVotes = Math.max(...votes);
  const winnerIndex = votes.indexOf(maxVotes);

  return (
    <div className="container">
      <h1>Голосування за найкращий смайлик</h1>

      <div className="emoji-list">
        {emojis.map((emoji, index) => (
          <EmojiCard
            key={index}
            emoji={emoji}
            votes={votes[index]}
            index={index}
            onVote={handleVote}
          />
        ))}
      </div>

      <div className="buttons">
        <Button
          text="Show Results"
          className="show-btn"
          onClick={showResults}
        />

        <Button
          text="Clear Results"
          className="clear-btn"
          onClick={clearResults}
        />
      </div>

      {showWinner && (
        <div className="results">
          <h2>Результати голосування</h2>

          {maxVotes > 0 ? (
            <>
              <h3>Переможець:</h3>

              <div className="winner">{emojis[winnerIndex]}</div>

              <p>Кількість голосів: {maxVotes}</p>
            </>
          ) : (
            <p>Голосів ще немає.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
