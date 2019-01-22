import axios from 'axios';
const token = localStorage.getItem('access_token');


//add the following lines to any file where you import axios
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

// The url derived from our .env file
//.env varible need to set in project root folder
// need to convert to string

const URL = `${process.env.REACT_APP_API_URL}/api/`.toString();

function makeHeaders() {
    const headers = {
        'Content-Type': 'application/json',
    };
    return headers;
}
/*eslint-disable */
function makeHeaderWithToken() {
    console.log('Header with token', token);
    const headers = {
        'Authorization': `${"Bearer" + " "}${token}`,
        'Content-Type': 'application/json',
    };
    return headers;
}

const api = axios.create({
    baseURL: URL,
    headers: token ? makeHeaderWithToken() : makeHeaders(),
});

export default api;
