import * as actionsTypes from './AActionTypes';
import actionsError from './AError';

describe('Error Actions Test', () => {
    it('should create an action to showError', () => {
        const payload = 'data';
        const expectedAction = {
            type: actionsTypes.SHOW_ERROR,
            payload,
        };
        expect(actionsError.showError(payload)).toEqual(expectedAction)
    });

    it('should create an action to hideError', () => {
        const expectedAction = {
            type: actionsTypes.HIDE_ERROR,
        };
        expect(actionsError.hideError()).toEqual(expectedAction)
    });
})