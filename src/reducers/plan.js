import { handleActions } from 'redux-actions';
import Immutable, {
  updateIn
} from 'seamless-immutable';

import itemActions from 'actions/item';
import { plan as initialState } from 'fixtures';
import { __, merge, without } from 'ramda';

export default handleActions({
  [itemActions.move]: (plan, { payload: { item, x, y } }) =>
    updateIn(
      plan, ['items', item.id], merge(__, { x, y })
    ),
  [itemActions.remove]: (plan, { payload: { item } }) =>
    updateIn(
      plan, ['items'], without(item.id)
    )
}, Immutable(initialState));
