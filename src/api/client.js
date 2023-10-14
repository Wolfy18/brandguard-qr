import axios from 'axios';

const client = axios.create({
	baseURL: `${window.location.origin}/wp-json/bak/v1/`,
	responseType: 'json',
	responseEncoding: 'utf8',
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default client;
