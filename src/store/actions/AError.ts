import {
    SHOW_ERROR,
    HIDE_ERROR
} from './AActionTypes';

const showError = (payload: {}) => {
    return {
        type: SHOW_ERROR,
        payload
    }
}

const hideError = () => {
    return {
        type: HIDE_ERROR,
    }
}

export {
    showError,
    hideError
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    showError,
    hideError
}