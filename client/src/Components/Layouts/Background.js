import React, { Component, Fragment } from "react";

const backgroundStyle = {
  background: "url(https://unsplash.it/2560/1600/?random)",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw"
};

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

export class Background extends Component {
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
      <Fragment>
        <img style={backgroundStyle} alt="" />;
        <div style={quoteStyle}>
          <div style={quoteText}>{this.state.quote}</div>
        </div>
      </Fragment>
    );
  }
}

export default Background;
