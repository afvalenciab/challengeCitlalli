import * as actionTypes from '../actions/AActionTypes';
import loginReducer from './RLogin';

describe('Login reducer test', () => {
    let init_state = {
        data: {},
        error: {}
    }

    it('Should return the initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(init_state);
    })

    it('Should return the initial state for getLoginRequest', () => {
        const action = {
            type: actionTypes.GET_LOGIN_REQUEST,
            payload: 'data'
        }
        expect(loginReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for getLoginSuccess', () => {
        const action = {
            type: actionTypes.GET_LOGIN_SUCCESS,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            data: action.payload
        }

        expect(loginReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the expected state for getLoginError', () => {
        const action = {
            type: actionTypes.GET_LOGIN_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            error: action.payload
        }

        expect(loginReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the initial state for getLogoutRequest', () => {
        const action = {
            type: actionTypes.GET_LOGOUT_REQUEST,
            payload: 'data'
        }
        expect(loginReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for getLogoutsSuccess', () => {
        const action = {
            type: actionTypes.GET_LOGOUT_SUCCESS,
            payload: 'data'
        }

        expect(loginReducer(undefined, action)).toEqual(init_state);
    })

    it('Should return the expected state for getLogoutsError', () => {
        const action = {
            type: actionTypes.GET_LOGOUT_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            error: action.payload
        }

        expect(loginReducer(undefined, action)).toEqual(expectedState);
    })
})