import {
    SHOW_LOADER,
    HIDE_LOADER
} from './AActionTypes';

const showLoader = (title?: string) => {
    return {
        type: SHOW_LOADER,
        payload: {
            status: true,
            title
        }
    }
}

const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
}

export {
    showLoader,
    hideLoader
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    showLoader,
    hideLoader
}