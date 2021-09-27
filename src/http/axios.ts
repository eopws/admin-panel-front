import axios from 'axios';

/**
 * @TODO replace with process.env
 */
const API_URL = 'http://localhost:3001';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

export default $api
