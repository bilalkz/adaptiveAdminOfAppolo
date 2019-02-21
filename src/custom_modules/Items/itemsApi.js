import axios from 'axios';


// const token = localStorage.getItem('access_token');


const BaseURL = `http://138.68.241.158/api/item`;



export function items() {
  return axios.get(`${BaseURL}/list_all`, {
    withCredentials: false,
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function createItem(payload) {
  return axios.post(`${BaseURL}/create`, payload, {
    withCredentials: false,
    mode: "no-cors",
    method: "POST",
    headers: {
      "Accept": "application/json"
    }
  })
}

export function updateItem(payload) {
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