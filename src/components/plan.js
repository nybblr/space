import React from 'react';

import Item from './item';

let Plan = ({ plan, moveItem }) =>
  <div className="plan">
    <svg className="plan-canvas" width="100%" height="100%">
      {Object.values(plan.items).map(item =>
        <Item
          key={item.id}
          item={item}
          move={(x, y) => moveItem({ item, x, y })} />
      )}
    </svg>
  </div>

export default Plan;
