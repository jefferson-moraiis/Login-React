import axios from 'axios';

export const ApiAuth = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL_AUTH,
});
