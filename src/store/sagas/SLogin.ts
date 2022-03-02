import {
    call, put, takeLatest
} from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import * as actionTypes from '../actions/AActionTypes';
import * as actionsLogin from '../actions/ALogin';
import * as actionsError from '../actions/AError';
import * as actionsData from '../actions/AData';
import * as actionsLoader from '../actions/ALoader';
import { fetchToken } from '../../services/login';
import { IToken } from '../../interfaces/IToken';

export function* login({ payload }: any) {
    yield put(actionsLoader.showLoader());
    const { password, email, navigate } = payload
    try {
        const data: { access: string; refresh: string; } = yield call(fetchToken, { email, password })
        const { access: token } = data
        const decodedToken: IToken = jwt_decode(token)
        const expirationDate = new Date(decodedToken.exp * 1000)
        const actualDate = new Date()
        if (expirationDate > actualDate) {
            yield put(actionsLogin.getLoginSuccess(data))
            yield put(actionsData.getStoreRequest({ navigate }));
        }
        yield put(actionsLoader.hideLoader());
    } catch (error) {
        yield put(actionsLoader.hideLoader());
        yield put(actionsError.showError({}))
    }
}

export default function* loginSaga() {
    yield takeLatest(actionTypes.GET_LOGIN_REQUEST, login)
}
