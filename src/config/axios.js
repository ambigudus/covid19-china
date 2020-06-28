import axios from 'axios';

export const authAxios = axios.create({
	baseURL: "http://localhost:5566",//process.env.REACT_APP_API_ENDPOINT,
  timeout: 120000,
});
