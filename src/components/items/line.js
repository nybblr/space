import React from 'react';

let Line = ({ item: { ax, ay, bx, by } }) =>
  <line x1="0" y1="0" x2={bx} y2={by} stroke="orange" strokeWidth="5"/>

export default Line;
