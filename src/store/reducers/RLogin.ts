import * as Types from '../actions/AActionTypes'

const INIT_STATE = {
    data: {},
    error: {}
}

const loginReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case Types.GET_LOGIN_REQUEST: {
            return {
                ...state
            }
        }
        case Types.GET_LOGIN_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case Types.GET_LOGIN_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Types.GET_LOGOUT_REQUEST: {
            return {
                ...state
            }
        }
        case Types.GET_LOGOUT_SUCCESS: {
            return INIT_STATE
        }
        case Types.GET_LOGOUT_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default loginReducer
