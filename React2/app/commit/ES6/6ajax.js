import React,{Component} from 'react'

export default class extends Component {
  constructor(){
    super();
    this.state = {
      cont: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({cont: this.state.cont + 1})
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>提交</button>
        <p>{this.state.cont}</p>
      </div>
    );
  }
}
