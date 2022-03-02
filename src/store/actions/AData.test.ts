import * as actionsTypes from './AActionTypes';
import actionsData from './AData';

describe('Data Actions Test', () => {
    it('should create an action to getStoreRequest', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_STORE_REQUEST,
            payload,
        };
        expect(actionsData.getStoreRequest(payload)).toEqual(expectedAction)
    });

    it('should create an action to getStoreSuccess', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_STORE_SUCCESS,
            payload,
        };
        expect(actionsData.getStoreSuccess(payload)).toEqual(expectedAction)
    });

    it('should create an action to getStoreError', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_STORE_ERROR,
            payload,
        };
        expect(actionsData.getStoreError(payload)).toEqual(expectedAction)
    });

    it('should create an action to getProductsRequest', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_PRODUCTS_REQUEST,
            payload,
        };
        expect(actionsData.getProductsRequest(payload)).toEqual(expectedAction)
    });

    it('should create an action to getProductsSuccess', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_PRODUCTS_SUCCESS,
            payload,
        };
        expect(actionsData.getProductsSuccess(payload)).toEqual(expectedAction)
    });

    it('should create an action to getProductsError', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_PRODUCTS_ERROR,
            payload,
        };
        expect(actionsData.getProductsError(payload)).toEqual(expectedAction)
    });

    it('should create an action to updateProductRequest', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.UPDATE_PRODUCT_REQUEST,
            payload,
        };
        expect(actionsData.updateProductRequest(payload)).toEqual(expectedAction)
    });

    it('should create an action to updateProductSuccess', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.UPDATE_PRODUCT_SUCCESS,
            payload,
        };
        expect(actionsData.updateProductSuccess(payload)).toEqual(expectedAction)
    });

    it('should create an action to updateProductError', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.UPDATE_PRODUCT_ERROR,
            payload,
        };
        expect(actionsData.updateProductError(payload)).toEqual(expectedAction)
    });
})