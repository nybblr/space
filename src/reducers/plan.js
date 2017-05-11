import { handleActions } from 'redux-actions';
import Immutable, {
  updateIn
} from 'seamless-immutable';

import itemActions from 'actions/item';
import { plan as initialState } from 'fixtures';
import { merge, omit } from 'lib/object';

export default handleActions({
  [itemActions.move]: (plan, { payload: { item, x, y } }) =>
    updateIn(
      plan, ['items', item.id], merge({ x, y })
    ),
  [itemActions.remove]: (plan, { payload: { item } }) =>
    updateIn(
      plan, ['items'], omit(item.id)
    )
}, Immutable(initialState));
