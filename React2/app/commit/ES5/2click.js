var React = require('react')

var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.focus.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="focus"/>
        <button onClick={this.handleClick}>获取</button>
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
