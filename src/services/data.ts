import ENDPOINTS from "./endpoints";
import { CONSTANTS, HEADER_CONFIG } from './constants';

type fetchStoreProps = {
    token: string;
}

async function fetchStoreData({ token }: fetchStoreProps) {
    const response = await fetch(`${CONSTANTS.BASE_URL}${ENDPOINTS.getStores}`, {
        method: 'GET',
        headers: HEADER_CONFIG(token)
    })
    const data: {} = await response.json()
    return data
}

type fetchProductsProps = {
    token: string;
    storeId: string
}

async function fetchProductsData(payload: fetchProductsProps) {
    const { token, storeId } = payload
    const URL = `${CONSTANTS.BASE_URL}${ENDPOINTS.getProducts}/?store=${storeId}`
    const response = await fetch(URL, {
        method: 'GET',
        headers: HEADER_CONFIG(token)
    })
    const data: {} = await response.json()
    return data
}

type fetchUpdateProductProps = {
    token: string;
    productId: string,
    availability: boolean
}

async function fetchUpdateProductData(payload: fetchUpdateProductProps) {
    const { token, productId, availability } = payload
    const URL = `${CONSTANTS.BASE_URL}${ENDPOINTS.getProducts}/${productId}${ENDPOINTS.updateProduct}`
    const isAvailable = availability ? 'AVAILABLE' : 'UNAVAILABLE';
    const response = await fetch(URL, {
        method: 'PUT',
        headers: HEADER_CONFIG(token),
        body: JSON.stringify({
            availability: isAvailable,
        })
    })
    const data: {} = await response.json()
    return data
}

export { fetchStoreData, fetchProductsData, fetchUpdateProductData }