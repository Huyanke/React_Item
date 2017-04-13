var React = require('react')
var $ = require('jquery')


var RepoList = React.createClass({

  getInitialState: function() {
    return { loading: true, error: null, data: null};
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        console.log(repo)
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h3>Most Popular JavaScript Projects in Github</h3>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <RepoList  promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>
      </div>
    )
  }
})
