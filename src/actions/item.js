import { createActions } from 'redux-actions';

const K = x => x;

export default createActions({
  ITEM: {
    MOVE: K,
    REMOVE: K,
  }
}).item;
