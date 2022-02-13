import React, { Component } from 'react';

export default class App extends Component {
  sayHello() {
    alert('hello');
  }
  render() {
    return (
      <div>
        <button onClick={this.sayHello}>hello</button>
        <ul>
          {
            this.props.list.map(i => {
              return <li>{i}</li>;
            })
          }
        </ul>
      </div>
    )
  }
}