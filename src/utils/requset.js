import axios, { Axios } from 'axios';

export const Request = axios.create({
    baseUrl: 'http://mitapsstudio.vn:9098'})

export const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'

        }
    }
}