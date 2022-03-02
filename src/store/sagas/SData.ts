import {
    call, put, takeLatest, select, takeEvery
} from 'redux-saga/effects';
import * as actionTypes from '../actions/AActionTypes';
import * as actionsData from '../actions/AData';
import * as actionsError from '../actions/AError';
import * as actionsLoader from '../actions/ALoader';
import { fetchStoreData, fetchProductsData, fetchUpdateProductData } from '../../services/data';
import { IResponseStoresData } from '../../interfaces/IResponseData';

export const getToken = (state: any) => state.login.data.access;

export function* fetchStore({ payload }: any) {
    yield put(actionsLoader.showLoader('Consultando perfil'));
    const { navigate, refresh } = payload
    const token: string = yield select(getToken);
    try {
        const data: IResponseStoresData = yield call(fetchStoreData, { token })
        yield put(actionsData.getStoreSuccess(data))
        yield put(actionsLoader.hideLoader());
        yield put(actionsData.getProductsRequest({ storeId: data.result.stores[0].uuid, navigate, refresh }))
        // TODO: Dispatch products request for each store
        // data.result.stores.map(store => {
        //     yield put(actionsData.getProductsRequest(store.uuid))
        // })

    } catch (error) {
        yield put(actionsLoader.hideLoader());
        yield put(actionsError.showError({}))
    }
}

export function* fetchProducts({ payload }: any) {
    yield put(actionsLoader.showLoader('Obteniendo productos'));
    const { storeId, navigate, refresh } = payload
    const token: string = yield select(getToken);
    const payloadData = {
        token,
        storeId
    }
    try {
        const data: {} = yield call(fetchProductsData, payloadData)
        yield put(actionsData.getProductsSuccess(data))
        yield put(actionsLoader.hideLoader());
        !refresh && navigate('/menu')
    } catch (error) {
        yield put(actionsLoader.hideLoader());
        yield put(actionsError.showError({}))
    }
}

export function* fetchUpdateProduct({ payload }: any) {
    yield put(actionsLoader.showLoader('Actualizando producto'));
    const { productId, availability, setChecked } = payload
    const token: string = yield select(getToken);
    const payloadData = {
        token,
        productId,
        availability
    }
    try {
        const data: {} = yield call(fetchUpdateProductData, payloadData)
        setChecked(availability);
        yield put(actionsData.updateProductSuccess(data))
        yield put(actionsLoader.hideLoader());
    } catch (error) {
        yield put(actionsLoader.hideLoader());
        yield put(actionsError.showError({}))
    }
}

export default function* dataSaga() {
    yield takeLatest(actionTypes.GET_STORE_REQUEST, fetchStore);
    yield takeEvery(actionTypes.GET_PRODUCTS_REQUEST, fetchProducts);
    yield takeEvery(actionTypes.UPDATE_PRODUCT_REQUEST, fetchUpdateProduct);
}
