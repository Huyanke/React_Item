import React,{Component} from 'react'

export default class extends Component {
   constructor() {
     super();
   }
   render() {
      var names = ['Alice','Emily','Kate'];
      var arrs = [
        <h1>这是一个h1标签</h1>,
        <h2>这是一个h2标签</h2>
        ];
     return (
        <div>
          {arrs}
          {
            names.map((item) => {return <div>Hello {item}</div>})
          }
        </div>
     )
   }
}
