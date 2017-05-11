import { createEventHandler } from 'recompose';

let K = x => x;
export default (dispatch, action, transform = K) => {
  let { handler, stream } = createEventHandler();
  transform(stream)
    .subscribe(val => dispatch(action(val)));
  return handler;
};
