import * as actionTypes from '../actions/AActionTypes';
import errorReducer from './RError';

describe('Error reducer test', () => {
    let init_state = {
        status: false,
    }

    it('Should return the initial state', () => {
        expect(errorReducer(undefined, {})).toEqual(init_state);
    })

    it('Should return the expected state for showError', () => {
        const action = {
            type: actionTypes.SHOW_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            status: true
        }

        expect(errorReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the expected state for hideError', () => {
        const action = {
            type: actionTypes.HIDE_ERROR,
            payload: 'data'
        }

        const expectedState = {
            ...init_state,
            status: false
        }

        expect(errorReducer(undefined, action)).toEqual(expectedState);
    })
})