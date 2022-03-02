import { fork } from 'redux-saga/effects'
import loginSaga from './SLogin';
import logoutSaga from './SLogout';
import dataSaga from './SData';

export default function* rootSaga() {
  yield fork(loginSaga)
  yield fork(logoutSaga)
  yield fork(dataSaga)
}