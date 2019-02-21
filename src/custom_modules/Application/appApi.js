import axios from 'axios';
import api from '../../utils/api'


// const token = localStorage.getItem('access_token');


const BaseURL = `http://138.68.241.158/api/application`;



export function applications() {
  return axios.get(`${BaseURL}/list_all`, {
    withCredentials: false,
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function createApp(payload) {
  return axios.post(`${BaseURL}/create`, payload, {
    withCredentials: false,
    mode: "no-cors",
    method: "POST",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function updateApp(payload) {
  return axios.post(`${BaseURL}/update`, payload, {
    withCredentials: false,
    mode: "no-cors",
    method: "POST",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function remove(payload) {
  return axios.post(`${BaseURL}/delete`, payload, {
    withCredentials: false,
    mode: "no-cors",
    method: "POST",
    headers: {
      "Accept": "application/json"
    }
  })
}