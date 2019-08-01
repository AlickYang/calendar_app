import React, { Component } from "react";

const quoteStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const quoteText = {
  fontFamily: "Helvetica Neue",
  fontSize: "1.5vw",
  color: "white",
  letterSpacing: "1px",
  lineHeight: "1",
  margin: "0"
};

export class Quote extends Component {
  state = {
    quote: ""
  };

  componentDidMount = () => {
    fetch("https://horizonshq.herokuapp.com/api/inspirationalquotes")
      .then(res => res.json())
      .then(res => {
        this.setState({
          quote: res.message
        });
      });
  };

  render() {
    return (
      <div style={quoteStyle}>
        <div style={quoteText}>{this.state.quote}</div>
      </div>
    );
  }
}

export default Quote;
