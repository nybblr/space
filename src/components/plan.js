import React from 'react';

let Plan = ({ plan, removeItem }) =>
  <div className="plan">
    {plan.items.map(item =>
      <span key={item.id} onClick={() => removeItem(item)}>{item.type}</span>
    )}
  </div>

export default Plan;
