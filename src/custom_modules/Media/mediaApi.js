import axios from 'axios';
import api from '../../utils/api'


// const token = localStorage.getItem('access_token');


const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',
};
// console.log(token)
// const id = "4457e6ce-0e21-4342-8779-6e409e44c17c";

const BaseURL = `http://138.68.241.158/api/media`;

export function index() {
  return axios.get(`${BaseURL}/list_all`, {
    withCredentials: false,
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function audioIndex() {
  return axios.get(`${BaseURL}/list_by_audio`, {
    withCredentials: false,
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function imageIndex() {
  return axios.get(`${BaseURL}/list_by_image`, {
    withCredentials: false,
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
}

// export function mediaList() {
//   return axios.get(`${BaseURL}/list_all`)
// }

export function createMedia(payload) {
  return axios.post(`${BaseURL}/create`, payload, {
    withCredentials: false,
    mode: "no-cors",
    method: "POST",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function updateMedia(payload) {
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