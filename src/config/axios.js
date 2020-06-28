import axios from 'axios';

export const authAxios = axios.create({
	baseURL: "http://39.96.95.216:5566",//process.env.REACT_APP_API_ENDPOINT,
  timeout: 120000,
});
