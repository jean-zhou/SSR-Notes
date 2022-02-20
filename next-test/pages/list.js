import React, { Component } from 'react';

export default class list extends Component {
  state = {
    list: ['111,', '222', '333']
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map(item => (
              <li> {item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}