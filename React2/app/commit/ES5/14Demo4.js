  var React = require('react')

  var App = React.createClass({
    getInitialState: function() {
      return {
        value : 'Hello'
      }
    },
    handelChange: function(e) {
      this.setState({value: e.target.value})
    },
    render: function() {
      var value = this.state.value;
      return (
        <div>
          <input type="text" value={value} onChange={this.handelChange}/>
          <p>{value}</p>
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
