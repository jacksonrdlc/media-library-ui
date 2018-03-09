import React from 'react';

export class MediaItem extends React.Component {
  constructor(props, item) {
    super(props);
    this.props = {
      item
    }
  }
  render() {
    return (
      <div>
        <p>
          {this.props.item.title}
        </p>
      </div>
    );
  }
}