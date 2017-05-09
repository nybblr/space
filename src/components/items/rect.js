import React from 'react';

let Rect = ({ item: { l, t, w, h } }) =>
  <rect x={l} y={t} width={w} height={h} stroke="black" fill="transparent" strokeWidth="5" />

export default Rect;
