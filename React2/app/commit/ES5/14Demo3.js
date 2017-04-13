  var React = require('react')

  var App = React.createClass({
    getInitialState: function() {
      return {
        liked : false
      }
    },
    handelClick: function(e) {
      this.setState({liked : !this.state.liked})
    },
    render: function() {
      var text = this.state.liked ? 'like' : 'have\'t liked';
      return (
        <div onClick={this.handelClick}>
           YOU{text}
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
