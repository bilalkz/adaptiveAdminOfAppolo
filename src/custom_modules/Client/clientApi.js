import axios from 'axios';


const token = localStorage.getItem('access_token');

const clientBaseURL = 'http://104.248.151.204:8100/api'


const headers = {
    'Authorization': `${"Bearer" + " "}${token}`,
    'Content-Type': 'application/json',
};

const id = "4457e6ce-0e21-4342-8779-6e409e44c17c";

export function clients() {
    return axios.get(`${clientBaseURL}/clients/${id}/`)
        .then(response => console.log(response,`then response`))
        .catch(response => console.log(response,`catch response`))
}

export function createClient() {
    return axios.post(`${clientBaseURL}/client/`)
}

export function updateClient() {
    return axios.put(`${clientBaseURL}/client/`)
}

export function searchClient() {
    return axios.get(`${clientBaseURL}/clients/`)
}

export function unArchivedClient() {
    return axios.patch(`${clientBaseURL}/clients/`)
}