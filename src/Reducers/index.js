import { combineReducers } from 'redux';
import conversations from './conversations';

const app = combineReducers({
  conversations,
});

export default app;

