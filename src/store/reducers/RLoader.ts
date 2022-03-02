import * as Types from '../actions/AActionTypes';

const INIT_STATE = {
    status: false,
    title: '',
    default: {
        title: 'Por favor, espera un momento'
    }
}

const loaderReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case Types.SHOW_LOADER: {
            return {
                ...state,
                status: action.payload.status,
                title: action.payload.title ? action.payload.title : state.default.title
            }
        }
        case Types.HIDE_LOADER: {
            return {
                ...state,
                status: false
            }
        }
        default: return state;
    }
}

export default loaderReducer;