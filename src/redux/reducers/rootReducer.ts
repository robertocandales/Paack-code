import { combineReducers } from 'redux';
import deliveriesReducer from './deliveriesReducer';
import isLoadingReducer from './interactionReducer';

export const rootReducer = combineReducers({
  deliveries: deliveriesReducer,
  loading: isLoadingReducer,
});
