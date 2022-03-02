import * as actionsTypes from './AActionTypes';
import actionsLogin from './ALogin';

describe('Login Actions Test', () => {
    it('should create an action to getLoginRequest', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_LOGIN_REQUEST,
            payload,
        };
        expect(actionsLogin.getLoginRequest(payload)).toEqual(expectedAction)
    });

    it('should create an action to getLoginSuccess', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_LOGIN_SUCCESS,
            payload,
        };
        expect(actionsLogin.getLoginSuccess(payload)).toEqual(expectedAction)
    });

    it('should create an action to getLoginError', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_LOGIN_ERROR,
            payload,
        };
        expect(actionsLogin.getLoginError(payload)).toEqual(expectedAction)
    });
})