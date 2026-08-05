import React, { Component } from 'react';

class EmojiCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { emoji, votes, onVote } = this.props;

    return (
      <div className="emoji-card">
        <div className="emoji" onClick={onVote}>
          {emoji}
        </div>

        <div className="count">{votes}</div>
      </div>
    );
  }
}

export default EmojiCard;
