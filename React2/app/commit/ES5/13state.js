  var React = require('react')

  var App = React.createClass({
    getInitialState: function() {
      return {
        isRed : true
      };
    },
    handleClick: function() {
      this.setState({isRed : !this.state.isRed})
    },
    render: function() {
      var Redstyle = {
        color: 'red'
      };
      var Bluestyle = {
        color: 'pink'
      };
      return (
        <div>
          <h2 style={this.state.isRed ? Redstyle : Bluestyle}>Hello</h2>
          <button onClick={this.handleClick}>切换颜色</button>
        </div>
      )
    }
  })


  module.exports = React.createClass({
    render: function() {
      return (
        <div>
          <App />
        </div>
      )
    }
  })
