import * as React from 'react';

export default class Trip extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <label>Trip Name:</label>
          <input type="text"/>
        </div>
    );
  }
}