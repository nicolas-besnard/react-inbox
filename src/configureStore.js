import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger  } from 'redux-logger'
import rootReducers from './Reducers';

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;

