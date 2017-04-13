import React,{Component} from 'react'

export default class extends Component {
   constructor() {
     super();
     this.state = {
       value : 'hello'
     }
   }
   handelChange(e) {
     this.setState({value:e.target.value})
   }
   render() {
     var value = this.state.value
     return (
       <div>
          <input type="text" value={value} onChange={this.handelChange.bind(this)}/>
          <p>{value}</p>
       </div>
     )
   }

}
