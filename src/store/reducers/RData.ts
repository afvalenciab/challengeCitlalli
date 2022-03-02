import * as Types from '../actions/AActionTypes'

const INIT_STATE = {
    store: {},
    products: {},
    error: {}
}

const dataReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case Types.GET_STORE_REQUEST: {
            return {
                ...state
            }
        }
        case Types.GET_STORE_SUCCESS: {
            return {
                ...state,
                store: action.payload
            }
        }
        case Types.GET_STORE_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Types.GET_PRODUCTS_REQUEST: {
            return {
                ...state
            }
        }
        case Types.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case Types.GET_PRODUCTS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Types.UPDATE_PRODUCT_REQUEST: {
            return {
                ...state
            }
        }
        case Types.UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
            }
        }
        case Types.UPDATE_PRODUCT_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default dataReducer
