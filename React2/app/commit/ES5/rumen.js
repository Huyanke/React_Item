var React = require('react')

var Hello = React.createClass({
  render: function() {
    return (
      <h1>ES5!</h1>
    )
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
})
