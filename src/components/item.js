import React from 'react';

import rect from './items/rect';
import line from './items/line';

let components = { rect, line };

let dragging = null;
let ox, oy;

let Item = ({ item, move }) => {
  let Component = components[item.type];
  let { x, y } = item;

  let startDrag = ({ clientX, clientY }) => {
    dragging = item;
    ox = clientX - x;
    oy = clientY - y;
  };

  let moveDrag = ({ clientX, clientY }) => {
    if (!(dragging && dragging.id === item.id)) return;
    let x = clientX - ox;
    let y = clientY - oy;
    move({x, y});
  };

  let endDrag = ({ clientX, clientY }) => {
    dragging = null;
  };

  return (
    <g transform={`translate(${x},${y})`}
      onMouseDown={startDrag}
      onMouseMove={moveDrag}
      onMouseUp={endDrag}>
      <Component item={item} />
    </g>
  )
}

export default Item;
