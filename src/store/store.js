import { compose, createStore, applyMiddleware } from 'redux';
import reducer from './reducersCombined';
import createSagaMiddleware from 'redux-saga';
import { loadState, subscribeToSaveOnLocalStorage } from './localStorage';
import rootSaga from './saga';
import { IS_SERVER } from '../constants';
import { adminActions, resourceActions, userActions } from './actions';

const sagaMiddleware = createSagaMiddleware();

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistWhitelist = {
  user: true,
  learningPaths: true,
};

const persistBlackList = {};

const initStore = initialState => {
  let persistedState = {};

  if (!isServer) {
    persistedState = loadState(persistWhitelist, persistBlackList);
  }

  const store = createStore(
    reducer,
    { ...initialState, ...persistedState },
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  if (!IS_SERVER) {
    window.distpatch = store.dispatch;
  }

  return store;
};

export function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    const store = initStore(initialState);
    subscribeToSaveOnLocalStorage(store, persistWhitelist, persistBlackList);

    window[__NEXT_REDUX_STORE__] = store;
  }
  return window[__NEXT_REDUX_STORE__];
}
