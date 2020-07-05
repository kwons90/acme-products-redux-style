
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <div>React is running!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));