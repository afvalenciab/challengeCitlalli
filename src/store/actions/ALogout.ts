import {
    GET_LOGOUT_REQUEST,
    GET_LOGOUT_SUCCESS,
    GET_LOGOUT_ERROR,
} from './AActionTypes'

const getLogoutRequest = (payload: {}) => {
    return {
        type: GET_LOGOUT_REQUEST,
        payload: payload,
    }
}

const getLogoutSuccess = (payload: {}) => {
    return {
        type: GET_LOGOUT_SUCCESS,
        payload: payload,
    }
}

const getLogoutError = (payload: {}) => {
    return {
        type: GET_LOGOUT_ERROR,
        payload: payload,
    }
}

export {
    getLogoutRequest,
    getLogoutSuccess,
    getLogoutError
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLogoutRequest,
    getLogoutSuccess,
    getLogoutError
}