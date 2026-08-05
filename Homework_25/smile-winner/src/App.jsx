import React, { Component } from 'react';
import './App.css';
import EmojiCard from './components/EmojiCard/EmojiCard';
import Button from './components/Buttons/Button';

class App extends Component {
  emojis = ['😀', '😊', '😎', '🤩', '😍'];

  constructor(props) {
    super(props);

    const savedVotes = JSON.parse(localStorage.getItem('votes'));

    this.state = {
      votes: savedVotes || [0, 0, 0, 0, 0],
      showWinner: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem('votes', JSON.stringify(this.state.votes));
    }
  }

  handleVote = index => {
    this.setState(prevState => {
      const newVotes = [...prevState.votes];
      newVotes[index]++;

      return {
        votes: newVotes,
      };
    });
  };

  showResults = () => {
    this.setState({
      showWinner: true,
    });
  };

  clearResults = () => {
    localStorage.removeItem('votes');

    this.setState({
      votes: [0, 0, 0, 0, 0],
      showWinner: false,
    });
  };

  render() {
    const { votes, showWinner } = this.state;

    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);

    return (
      <div className="container">
        <h1>Голосування за найкращий смайлик</h1>

        <div className="emoji-list">
          {this.emojis.map((emoji, index) => (
            <EmojiCard
              key={index}
              emoji={emoji}
              votes={votes[index]}
              onVote={() => this.handleVote(index)}
            />
          ))}
        </div>

        <div className="buttons">
          <Button
            text="Show Results"
            className="show-btn"
            onClick={this.showResults}
          />

          <Button
            text="Clear Results"
            className="clear-btn"
            onClick={this.clearResults}
          />
        </div>

        {showWinner && (
          <div className="results">
            <h2>Результати голосування</h2>

            {maxVotes > 0 ? (
              <>
                <h3>Переможець:</h3>

                <div className="winner">{this.emojis[winnerIndex]}</div>

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
}

export default App;
