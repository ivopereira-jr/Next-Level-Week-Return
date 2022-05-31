import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://192.168.184.208:3333'
});
