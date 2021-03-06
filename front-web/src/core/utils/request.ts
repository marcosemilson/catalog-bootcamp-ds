import axios, { Method } from "axios";
import qs from 'qs'
import { CLIENT_ID, CLIENT_SECRET, getSessionData, logout } from "./Auth";
import history from './history';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?:object;
}

type LoginData = {
    username: string;
    password: string;   
}
const BASE_URL = 'http://localhost:8090'

axios.interceptors.response.use(function(response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        logout();
    }
    return Promise.reject(error);
})

export const makeRequest = ({method = "GET", url, data, params, headers}: RequestParams)=>{
    return axios({
        method, 
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    })
}

export const makePrivateRequest = ({method , url, data, params,}: RequestParams) =>{
    const sessionData = getSessionData();
    
    const headers = {
        'Authorization': `Bear ${sessionData.access_token}`
    }

    return makeRequest({method, url, data, params, headers});
}

export const makeLogin = (loginData: LoginData) =>{
const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

 const headers = {
     Authorization: `Basic ${window.btoa(token)}`,
     'content-type': 'application/x-www-form-urlencoded'
 }

  const payload = qs.stringify({...loginData, grant_type:'password'});

  return makeRequest({url:'/oauth/token', data: payload, method: 'POST', headers})
}