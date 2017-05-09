import React from 'react';

import draggable from 'lib/draggable';

import rect from './items/rect';
import line from './items/line';

let components = { rect, line };

let Item = ({ item, move, dragStart }) => {
  let Component = components[item.type];
  let { x, y } = item;

  return (
    <g
      className="item"
      transform={`translate(${x},${y})`}
      onMouseDown={dragStart}
    >
      <Component item={item} />
    </g>
  )
}

let enhance = draggable(({ item: {x, y}, move }, { ddx, ddy }) => {
  move({ x: x + ddx, y: y + ddy });
});

export default enhance(Item);
