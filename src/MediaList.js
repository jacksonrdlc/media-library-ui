import React from 'react';
import {MediaItem} from './MediaItem';

const movieList = require('./movies.json');

export class MediaList extends React.Component {
  render() {
    const {movie} = this.props;

    var listItems = movieList.map(function (item) {
      return (
        <li>
          <MediaItem item={item}></MediaItem>
        </li>
      );
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}