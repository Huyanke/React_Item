import React,{Component} from 'react'

export default class extends Component {
  constructor() {
    super();
    this.state = {
      text: true
    }
  }
  handleClick() {
    this.setState({text: !this.state.text})
  }
  render() {
    const text = this.state.text ? 'liked' : 'unliked';
    return (
      <div onClick={this.handleClick.bind(this)}>
          You {text} this.click to toggle
      </div>
    )
  }
}
