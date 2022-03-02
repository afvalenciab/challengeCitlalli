import {
    GET_STORE_REQUEST,
    GET_STORE_SUCCESS,
    GET_STORE_ERROR,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR
} from './AActionTypes'

const getStoreRequest = (payload: {}) => {
    return {
        type: GET_STORE_REQUEST,
        payload: payload
    }
}

const getStoreSuccess = (payload: {}) => {
    return {
        type: GET_STORE_SUCCESS,
        payload: payload,
    }
}

const getStoreError = (payload: {}) => {
    return {
        type: GET_STORE_ERROR,
        payload: payload,
    }
}

const getProductsRequest = (payload: {}) => {
    return {
        type: GET_PRODUCTS_REQUEST,
        payload: payload,
    }
}

const getProductsSuccess = (payload: {}) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: payload,
    }
}

const getProductsError = (payload: {}) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: payload,
    }
}

const updateProductRequest = (payload: {}) => {
    return {
        type: UPDATE_PRODUCT_REQUEST,
        payload: payload,
    }
}

const updateProductSuccess = (payload: {}) => {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload: payload,
    }
}

const updateProductError = (payload: {}) => {
    return {
        type: UPDATE_PRODUCT_ERROR,
        payload: payload,
    }
}

export {
    getStoreRequest,
    getStoreSuccess,
    getStoreError,
    getProductsRequest,
    getProductsSuccess,
    getProductsError,
    updateProductRequest,
    updateProductSuccess,
    updateProductError
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getStoreRequest,
    getStoreSuccess,
    getStoreError,
    getProductsRequest,
    getProductsSuccess,
    getProductsError,
    updateProductRequest,
    updateProductSuccess,
    updateProductError
}