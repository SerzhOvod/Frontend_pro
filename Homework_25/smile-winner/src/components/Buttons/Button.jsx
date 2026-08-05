import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, onClick, className } = this.props;

    return (
      <button className={className} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
