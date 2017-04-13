  var React = require('react')
  var Mask = React.createClass({
    render: function() {
      var styles={
            position:'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: 'black',
            opacity: 0.5,
            display:'block'
      }
      if(this.props.show) {
        styles.display = 'block';
      }else {
        styles.display = 'none';
      }
      return (
        <div style={styles}>
          {this.props.children}
        </div>
      )
    }
  })

  var Dialog = React.createClass({
    onShowClick: function() {
     this.props.onShowClick({
        name: 'Janko'
     })
    },

    render: function() {
      var styles={
            width:'100%',
            height:'200px',
            background:'orange',
            lineHeight:'200px',
            textAlign:'center',
            color:'black'
        }
      return (
        <div>
          <Mask show={this.props.show}>
            <div style={styles} onClick={this.onShowClick}>Click</div>
          </Mask>
        </div>
      )
    }
  })

  var App = React.createClass({
    getInitialState: function() {
      return {
        show: true
      }
    },
    onHandelClick: function(name) {
      console.log(name)
      console.log('name')
      this.setState({show: false})
    },
    render: function() {
      return (
        <div>
          <Dialog show={this.state.show} onShowClick={this.onHandelClick} />
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
