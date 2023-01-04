import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];

const store = configureStore({
  reducer: {
    rootReducer
  }
});
// applyMiddleware({...middleware})

export default store;
