import React, { Component } from 'react';
import Plan from 'components/plan';
import Immutable from 'seamless-immutable';

import { plan } from 'fixtures';

let merge = src => target => ({ ...target, ...src });

class PlanIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: Immutable(plan)
    }
  }

  moveItem = (item, pos) => {
    this.setState(state => Immutable.updateIn(
      state, ['plan', 'items', item.id], merge(pos)
    ));
  }

  render() {
    let { plan } = this.state;
    return (
      <div className="route plan-index">
        <nav className="picker">Pick from me!</nav>
        <Plan plan={plan} moveItem={this.moveItem} />
      </div>
    )
  }
}

export default PlanIndex;
