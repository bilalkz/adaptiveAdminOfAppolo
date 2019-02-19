import axios from 'axios';
import api from '../../utils/api'


// const token = localStorage.getItem('access_token');

const BaseURL = '';


// const headers = {
//   Authorization: `${"Bearer" + " "}${token}`,
//   'Content-Type': 'application/json',
// };
// console.log(token)
// const id = "4457e6ce-0e21-4342-8779-6e409e44c17c";


export function items() {
  return axios.get(`${BaseURL}/clients/${id}/`, { headers })
}

export function createItem(payload) {
  return axios.post(`${BaseURL}/client/`, payload, { headers })
}

export function updateItem(payload) {
  return axios.put(`${BaseURL}/client/${payload.id}/`, payload.obj, { headers })
}

export function remove(payload) {
  return axios.remove(`${BaseURL}/items/${payload.id}/`, payload.id);
}