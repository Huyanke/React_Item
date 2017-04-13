var React = require('react')

var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      gender: 'man',
      checked: true
    }
  },
  handleUsernameChange: function(event) {
    this.setState({
      username: event.target.value
    })
  },
  handleGendleChange: function(event) {
    this.setState({
      gender:event.target.value
    })
  },
  handleCheckedChange: function(event) {
    this.setState({
      checked: event.target.value
    })
  },
  submitHandler: function(event) {
    event.preventDefault();
    console.log(this.state);
  },
  render: function() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="username">请输入用户名</label>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/><br />
        <select value={this.state.gender} onChange={this.handleGendleChange}>
          <option value="man">男</option>
          <option value="woman">女</option>
        </select><br />
        <label htmlFor="checkbox">同意用户协议</label>
        <input type="checkbox" value="agree" checked={this.state.checked} onChange={this.handleCheckedChange}/>
        <button type="submit">提交</button>
      </form>
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
