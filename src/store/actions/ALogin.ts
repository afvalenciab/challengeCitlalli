import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
} from './AActionTypes'

const getLoginRequest = (payload: {}) => {
    return {
        type: GET_LOGIN_REQUEST,
        payload: payload,
    }
}

const getLoginSuccess = (payload: {}) => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: payload,
    }
}

const getLoginError = (payload: {}) => {
    return {
        type: GET_LOGIN_ERROR,
        payload: payload,
    }
}

export {
    getLoginRequest,
    getLoginSuccess,
    getLoginError
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLoginRequest,
    getLoginSuccess,
    getLoginError
}