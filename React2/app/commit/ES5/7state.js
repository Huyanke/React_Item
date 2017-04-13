var React = require('react')

var MyComponent = React.createClass({
    getInitialState() {
    return {
      isRed: true,
      count: 0
    }
  },
  handleColor: function() {
    this.setState({isRed: !this.state.isRed})
  },
  handleClick: function() {
    this.setState({count: this.state.count + 1})
  },
  render: function() {
    var redStyle = {
      color: 'red'
    };
    var blueStyle = {
      color: 'blue',
      fontSize: '35px'
    };
    return (
      <div>
        <h1 style={this.state.isRed ? redStyle : blueStyle}>Hello</h1>
        <button onClick={this.handleColor}>切换颜色</button>
        <button onClick={this.handleClick}>点击次数{this.state.count}</button>
      </div>
    )
  }
})

  module.exports = React.createClass({
    render: function() {
      return (
        <div>
          <MyComponent />
        </div>
      )
    }
  })
