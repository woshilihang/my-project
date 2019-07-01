import {
  combineReducers,
  createStore,
} from 'redux';

const rootReducer = combineReducers({

});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
