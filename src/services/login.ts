import ENDPOINTS from "./endpoints";
import { CONSTANTS } from './constants';

type fetchTokenProps = {
    email: string;
    password: string;
}
async function fetchToken({ email, password }: fetchTokenProps) {
    const response = await fetch(`${CONSTANTS.BASE_URL}${ENDPOINTS.getToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password
        })
    })
    const data: {} = await response.json()
    return data
}

export { fetchToken }