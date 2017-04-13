import React,{Component} from 'react'

export default class extends Component {
  render() {
    var names = ['Alice','Janko','Kate']
    var arrs = [
      <h1>es6</h1>,
      <h2>React</h2>
    ]
    return (
      <div>
        {arrs}
        <ol>
          {
            names.map((item, index) => {return <li key={index}>{item}</li>})
          }
        </ol>
      </div>
    )
  }
}
