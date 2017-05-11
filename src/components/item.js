import React from 'react';

import draggable from 'lib/draggable';

import rug from './items/rug';
import lamp from './items/lamp';

let components = {
  rug,
  lamp
};

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

let enhance = draggable((
  { item: {x, y}, move },
  { ddx, ddy }
) => {
  move(x + ddx, y + ddy);
});

export default enhance(Item);
