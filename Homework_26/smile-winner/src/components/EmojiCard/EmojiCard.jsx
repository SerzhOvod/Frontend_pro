import React, { Component } from 'react';

function EmojiCard({ emoji, votes, index, onVote }) {
  const handleClick = () => {
    onVote(index);
  };

  return (
    <div className="emoji-card">
      <div className="emoji" onClick={handleClick}>
        {emoji}
      </div>
      <div className="count">{votes}</div>
    </div>
  );
}

export default EmojiCard;
