import * as actionTypes from '../actions/AActionTypes';
import loaderReducer from './RLoader';

describe('Loader reducer test', () => {
    let init_state = {
        status: false,
        title: '',
        default: {
            title: 'Por favor, espera un momento'
        }
    }

    it('Should return the initial state', () => {
        expect(loaderReducer(undefined, {})).toEqual(init_state);
    })

    it('Should return the expected state for showLoader', () => {
        const action = {
            type: actionTypes.SHOW_LOADER,
            payload: {
                status: true,
                title: 'Cargando'
            }
        }

        const expectedState = {
            status: true,
            title: 'Cargando',
            default: {
                title: 'Por favor, espera un momento'
            }
        }

        expect(loaderReducer(undefined, action)).toEqual(expectedState);
    })

    it('Should return the expected state for hideLoader', () => {
        const action = {
            type: actionTypes.HIDE_LOADER,
            payload: {
                status: false
            }
        }

        const expectedState = {
            status: false,
            title: '',
            default: {
                title: 'Por favor, espera un momento'
            }
        }

        expect(loaderReducer(undefined, action)).toEqual(expectedState);
    })
})