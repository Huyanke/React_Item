import React,{Component} from 'react'

export default class extends Component {

  handleClick() {
    this.refs.focus.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref="focus" />
        <button onClick={this.handleClick.bind(this)}>获取2</button>
      </div>
    )
  }
}
