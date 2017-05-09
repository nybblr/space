import React from 'react';

let Rect = ({ item: { w, h } }) =>
  <rect x="0" y="0" width={w} height={h} stroke="black" fill="transparent" strokeWidth="5" />

export default Rect;
