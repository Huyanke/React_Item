import React,{Component} from 'react'

export default class extends Component {
  constructor() {
    super();
    this.state = {
      value: '请输入...'
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
    const value = this.state.value;
    return (
      <div>
          <input value={value} onChange={this.handleChange.bind(this)} />
          <p>{value}</p>
      </div>
    )
  }
}
