import * as actionsTypes from './AActionTypes';
import actionsLoader from './ALoader';

describe('Loader Actions Test', () => {
    it('should create an action to showLoader', () => {
        const payload = 'test title';
        const expectedAction = {
            type: actionsTypes.SHOW_LOADER,
            payload: {
                status: true,
                title: 'test title'
            }
        };
        expect(actionsLoader.showLoader(payload)).toEqual(expectedAction)
    });

    it('should create an action to hideLoader', () => {
        const expectedAction = {
            type: actionsTypes.HIDE_LOADER,
        };
        expect(actionsLoader.hideLoader()).toEqual(expectedAction)
    });
})