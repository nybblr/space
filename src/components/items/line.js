import React from 'react';

let Line = ({ item: { ax, ay, bx, by } }) =>
  <line x1={ax} x2={bx} y1={ay} y2={by} stroke="orange" strokeWidth="5"/>

export default Line;
