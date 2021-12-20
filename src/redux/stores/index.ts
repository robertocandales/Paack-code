import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers

let composeEnhancers = compose;
import { rootReducer } from '../reducers/rootReducer';

if (__DEV__) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
