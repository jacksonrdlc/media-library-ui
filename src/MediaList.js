import React from 'react';
import {MediaItem} from './MediaItem';

const movieList = require('./movies.json');

export class MediaList extends React.Component {
  render() {

    var listItems = movieList.map(function (item) {
      return (
          <MediaItem item={item}></MediaItem>
      );
    });

    return (
      <p>
        {listItems}
      </p>
    );
  }
}