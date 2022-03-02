import {
    takeLatest, put
} from 'redux-saga/effects'
import * as actionTypes from '../actions/AActionTypes'
import * as actionsLogout from '../actions/ALogout'
import * as actionsLoader from '../actions/ALoader';

export function* logout({ payload }: any) {
    yield put(actionsLoader.showLoader());
    const { navigate } = payload
    yield put(actionsLogout.getLogoutSuccess({}))
    yield put(actionsLoader.hideLoader());
    navigate('/');
}

export default function* loginSaga() {
    yield takeLatest(actionTypes.GET_LOGOUT_REQUEST, logout)
}
