import axios from 'axios';
import api from '../../utils/api'


const token = localStorage.getItem('access_token');

const clientBaseURL = 'http://104.248.151.204:8100/api';


const headers = {
  Authorization: `${"Bearer" + " "}${token}`,
  'Content-Type': 'application/json',
};
console.log(token)
const id = "4457e6ce-0e21-4342-8779-6e409e44c17c";


export function clients() {
  return axios.get(`${clientBaseURL}/clients/${id}/`, { headers })
}

export function createClient(payload) {
  return axios.post(`${clientBaseURL}/client/`, payload, { headers })
}

export function updateClient(payload) {
  return axios.put(`${clientBaseURL}/client/${payload.id}/`, payload.obj, { headers })
}

export function searchClient() {
  return axios.get(`${clientBaseURL}/clients/`)
}

export function unArchivedClient(payload) {
  return axios.patch(`${clientBaseURL}/client/${payload.id}/`, { is_active: payload.is_active }, { headers })
}