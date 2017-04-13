  var React = require('react')

  var App = React.createClass({
    render: function() {
      var names = ['Alice','Emily','Kate'];
      var arrs = [
        <h1>这是一个h1标签</h1>,
        <h2>这是一个h2标签</h2>
      ];
      return (
      <div>
        {arrs}
        {
          names.map(function (item){ return <div>hello {item}</div>})
        }
      </div>
      )
    }
  })

  module.exports = React.createClass({
    render: function() {
      return (
        <div>
          <App />
        </div>
      )
    }
  })
