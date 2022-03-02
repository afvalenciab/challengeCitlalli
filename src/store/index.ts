import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store: any = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store