var React = require('react')

var RepeatArray = React.createClass({
  render: function() {
    var names = ['Alice','Janko','Kate']
    var arrs = [
      <h1>es5</h1>,
      <h2>React</h2>
    ]
    return (
      <div>
        {arrs}
        <ol>
          {
            names.map(function(item, index) {
              return <li key={index}>{item}</li>
            })
          }
        </ol>
      </div>
    )
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <RepeatArray />
      </div>
    )
  }
})
