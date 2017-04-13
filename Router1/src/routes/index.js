import React from 'react'

var Letter = React.createClass({
  render: function() {
    var letterStyle = {
      display: "inline-block",
      padding: 10,
      margin: 10,
      fontFamily: "monospace",
      fontSize: "32px",
      textAlign: "center",
      color: "#333",
      backgroundColor: this.props.bgcolor,

    };

    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">E</Letter>
        <Letter bgcolor="#FFD52E">I</Letter>
        <Letter bgcolor="#49DD8E">O</Letter>
        <Letter bgcolor="#AE99FF">U</Letter>
      </div>
    )
  }
})
