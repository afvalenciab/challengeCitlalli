import * as actionsTypes from './AActionTypes';
import actionsLogout from './ALogout';

describe('Logout Actions Test', () => {
    it('should create an action to getLogoutRequest', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_LOGOUT_REQUEST,
            payload,
        };
        expect(actionsLogout.getLogoutRequest(payload)).toEqual(expectedAction)
    });

    it('should create an action to getLogoutSuccess', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_LOGOUT_SUCCESS,
            payload,
        };
        expect(actionsLogout.getLogoutSuccess(payload)).toEqual(expectedAction)
    });

    it('should create an action to getLogoutError', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.GET_LOGOUT_ERROR,
            payload,
        };
        expect(actionsLogout.getLogoutError(payload)).toEqual(expectedAction)
    });
})