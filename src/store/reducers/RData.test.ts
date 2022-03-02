import * as actionTypes from '../actions/AActionTypes';
import dataReducer from './RData';

describe('Data reducer test', () => {
    let init_state = {
        store: {},
        products: {},
        error: {}
    }

    it('Should return the initial state', () => {
        expect(dataReducer(undefined, {})).toEqual(init_state);
    })

    it('Should return the initial state for getStoreRequest', () => {
        const action = {
            type: actionTypes.GET_STORE_REQUEST,
            payload: 'data'
        }
        expect(dataReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for getStoreSuccess', () => {
        const action = {
            type: actionTypes.GET_STORE_SUCCESS,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            store: action.payload
        }

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the expected state for getStoreError', () => {
        const action = {
            type: actionTypes.GET_STORE_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            error: action.payload
        }

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the initial state for getProductRequest', () => {
        const action = {
            type: actionTypes.GET_PRODUCTS_REQUEST,
            payload: 'data'
        }
        expect(dataReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for getProductsSuccess', () => {
        const action = {
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            products: action.payload
        }

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the expected state for getProductsError', () => {
        const action = {
            type: actionTypes.GET_PRODUCTS_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            error: action.payload
        }

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the initial state for updateProductequest', () => {
        const action = {
            type: actionTypes.UPDATE_PRODUCT_REQUEST,
            payload: 'data'
        }
        expect(dataReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for updateProductSuccess', () => {
        const action = {
            type: actionTypes.UPDATE_PRODUCT_SUCCESS,
            payload: 'data'
        }

        expect(dataReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for updateProductError', () => {
        const action = {
            type: actionTypes.UPDATE_PRODUCT_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            error: action.payload
        }

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    })
})