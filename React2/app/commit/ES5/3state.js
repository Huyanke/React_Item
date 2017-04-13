var React = require('react')

var LikeButton = React.createClass({
  getInitialState: function() {
    return {
      text: false
    }
  },
  handleClick: function() {
    this.setState({text: !this.state.text})
  },
  render: function() {
    const text = this.state.text ? 'liked' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this.click to toggle
      </div>
    )
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <LikeButton />
      </div>
    )
  }
})
