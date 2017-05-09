import React from 'react';

import rect from './items/rect';
import line from './items/line';

let components = { rect, line };

let Item = ({ item }) => {
  let Component = components[item.type];
  return (
    <g>
      <Component item={item} />
    </g>
  )
}

export default Item;
