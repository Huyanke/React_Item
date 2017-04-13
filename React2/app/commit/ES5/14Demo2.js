  var React = require('react')

  var App = React.createClass({
    handelClick: function() {
      alert('哈哈')
    },
    render: function() {
      return (
        <div>
          <input type="text" ref="myrefs" />
          <input type="button" value="Focus" onClick={this.handelClick} />
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
