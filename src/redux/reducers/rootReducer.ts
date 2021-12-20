import { combineReducers } from 'redux';
import deliveriesReducer from './deliveriesReducer';

export const rootReducer = combineReducers({
  deliveries: deliveriesReducer,
});
