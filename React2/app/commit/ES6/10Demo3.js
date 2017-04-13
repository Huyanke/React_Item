import React,{Component} from 'react'

export default class extends Component {
   constructor() {
     super();
     this.state = {
       liked : true
     }
   }
   handelClick() {
     this.setState({liked: !this.state.liked})
   }
   render() {
     var text = this.state.liked ? 'like' : 'don\'t liked'
     return (
       <div onClick={this.handelClick.bind(this)}>
          YOU {text}
       </div>
     )
   }
}
