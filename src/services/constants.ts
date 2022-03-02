const CONSTANTS = {
    BASE_URL: 'http://api-staging.parrot.rest'
}

const HEADER_CONFIG = (token: string) => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
})

export {
    CONSTANTS,
    HEADER_CONFIG,
}