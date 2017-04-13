import React,{Component} from 'react'

export default class extends Component {
   constructor() {
     super();
     this.state = {
       opacity : 1.0
     }
   }
  componentDidMount() {
    let time = setInterval(function() {
    let opacity = this.state.opacity;
        opacity -= .05;
      if(opacity < 0.1) {
        opacity = 1.0
      }
      this.setState({opacity:opacity})
    }.bind(this),150)
  }
  render() {
    return (
      <div style={{opacity:this.state.opacity}}>
        Hello
      </div>
    )
  }
}
