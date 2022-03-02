import * as Types from '../actions/AActionTypes';

interface IState {
    status: boolean
}

const INIT_STATE: IState = {
    status: false
}

const errorReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case Types.SHOW_ERROR: {
            return {
                ...state,
                status: true
            }
        }
        case Types.HIDE_ERROR: {
            return {
                ...state,
                status: false
            }
        }
        default: return state;
    }
}

export default errorReducer;