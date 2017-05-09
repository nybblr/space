import React from 'react';

import Item from './item';

let Plan = ({ plan }) =>
  <div className="plan">
    <svg className="plan-canvas" width="100%" height="100%">
      {plan.items.map(item =>
        <Item key={item.id} item={item} />
      )}
    </svg>
  </div>

export default Plan;
