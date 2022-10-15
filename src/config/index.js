const publicRuntimeConfig = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    API_URL: process.env.REACT_APP_API_URL,
    LOCALSTORAGE_TOKEN_NAME: 'token',
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
};

export const { NODE_ENV, API_URL, LOCALSTORAGE_TOKEN_NAME, CLIENT_ID } = publicRuntimeConfig;

export default publicRuntimeConfig.NODE_ENV;
