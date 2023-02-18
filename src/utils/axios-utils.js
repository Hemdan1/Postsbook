import axios from "axios";

const client = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})

const request = ({...options}) => {
    client.defaults.headers.common.Authorization = 'Bearer token';
    const onSuccess = response => response;
    const onError = error => error;
    return client(options).then(onSuccess).catch(onError);
};

export const users = ()=> request({url: '/users'});
export const posts = (userId)=> request({url: '/posts'});