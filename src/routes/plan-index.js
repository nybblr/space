import React, { Component } from 'react';
import Plan from 'components/plan';
import Immutable from 'seamless-immutable';

import { plan } from 'fixtures';

import withFire from 'lib/firehoce';
import db from 'database';

let merge = src => target => ({ ...target, ...src });

class PlanIndex extends Component {
  moveItem = (item, pos) => {
    this.props.setPlan(plan => Immutable.updateIn(
      plan, ['items', item.id], merge(pos)
    ));
  }

  render() {
    let { plan } = this.props;
    return (
      <div className="route plan-index">
        <nav className="picker">Pick from me!</nav>
        <Plan plan={plan} moveItem={this.moveItem} />
      </div>
    )
  }
}

let enhance = withFire(
  'plan', 'setPlan', db, () => ({
    ref: `plan`,
    isNullable: true,
  }),
  Immutable({items: {}})
);

export default enhance(PlanIndex);
