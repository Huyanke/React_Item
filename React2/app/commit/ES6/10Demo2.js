import React,{Component} from 'react'

export default class extends Component {
   constructor() {
     super();
   }
   handelClick() {
     alert('嗨！')
   }
   render() {
     return (
       <div>
        <input type="text" refs="myrefs"/>
        <input type="button" value="button" onClick={this.handelClick} />
       </div>
     )
   }
}
