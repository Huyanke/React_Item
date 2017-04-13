  var React = require('react')

  var App = React.createClass({
    getInitialState: function() {
      return {
        value: 'World'
      };
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
    },

    render: function() {
      var value = this.state.value;
      return (
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <h4>hello{value}</h4>
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
