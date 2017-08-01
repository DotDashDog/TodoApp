import React from 'react';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}
