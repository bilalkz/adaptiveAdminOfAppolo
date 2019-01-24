import axios from 'axios';


const token = localStorage.getItem('access_token');

const clientBaseURL = 'http://104.248.151.204:8100/api'


const headers = {
    'Authorization': `${"Bearer" + " "}${token}`,
    'Content-Type': 'application/json',
};

const id = "4457e6ce-0e21-4342-8779-6e409e44c17c";

export function clients() {
    return axios.get(`${clientBaseURL}/clients/${id}/`, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
    // .then(response => console.log(response,`then response`))
    // .catch(response => console.log(response,`catch response`))
}

export function createClient(payload) {
    return axios.post(`${clientBaseURL}/client/`, payload, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}

export function updateClient(payload) {
    console.log(payload)
    return axios.put(`${clientBaseURL}/client/${payload.id}/`, payload.obj, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}

export function searchClient() {
    return axios.get(`${clientBaseURL}/clients/`)
}

export function unArchivedClient(payload) {
    console.log(payload)
    return axios.patch(`${clientBaseURL}/client/${payload.id}/`, { is_active: payload.is_active }, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}