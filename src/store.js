// React-Redux
// Ref: https://react-redux.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Redux-Persist
// Ref: https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import session from 'redux-persist/lib/storage/session';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// storage data
const persistConfig = {
  key: 'cartData',
  storage: session
};

const reducers = combineReducers({ cartData: cartReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})