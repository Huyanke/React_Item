var React = require('react')

var InputComponent = React.createClass({

  getInitialState: function() {
    return {
      value: '请输入'
    }
  },
  handleChange: function(event) {
    this.setState({value: event.target.value})
  },
  render: function() {
    const value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange}/>
        <p>{value}</p>
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
