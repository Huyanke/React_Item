var React = require('react')

var InputComponent = React.createClass({

  getInitialState() {
    return {
      opacity: 1
    }
  },
  componentDidMount: function() {
    this.timer = setInterval(function() {
      var opacity = this.state.opacity;
      opacity -= .05
      if(opacity < 0.1){
        opacity = 1
      }
      this.setState({opacity: opacity})
    }.bind(this), 100)
  },
  render: function() {

    return (
      <div style={{opacity: this.state.opacity}}>
        Hello es5
      </div>
    )
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <InputComponent />
      </div>
    )
  }
})
