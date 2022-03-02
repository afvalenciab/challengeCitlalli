import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import loginReducer from './RLogin';
import dataReducer from './RData';
import errorReducer from './RError';
import loaderReducer from './RLoader';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  login: loginReducer,
  data: dataReducer,
  error: errorReducer,
  loader: loaderReducer
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;