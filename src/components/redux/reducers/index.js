import { combineReducers } from 'redux';
import roomReducer from './room-reducers';

const rootReducer = combineReducers({
  cart: roomReducer
});

export default rootReducer;
