import React, { Component } from 'react';
import Plan from 'components/plan';
import Immutable from 'seamless-immutable';

import { plan } from 'fixtures';

let remove = item => array =>
  array.filter(curr => curr !== item);

class PlanIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: Immutable(plan)
    }
  }

  removeItem = item => {
    this.setState(state => Immutable.updateIn(
      state, ['plan', 'items'], remove(item)
    ));
  }

  render() {
    let { plan } = this.state;
    return (
      <div className="route plan-index">
        <Plan plan={plan} removeItem={this.removeItem} />
      </div>
    )
  }
}

export default PlanIndex;
